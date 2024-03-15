import React, { useRef, useState } from 'react';
import './dragDropFile.scss';

const KILO_BYTES_PER_BYTE = 1000;
const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;

const convertNestedObjectToArray = nestedObj =>
  Object.keys(nestedObj).map(key => nestedObj[key]);

const convertBytesToKB = bytes => Math.round(bytes / KILO_BYTES_PER_BYTE);

const DragDropFile = ({
  label,
  updateFilesCb,
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  ...otherProps
}) => {
  const fileInputField = useRef(null);
  const [files, setFiles] = useState({});

  const handleUploadBtnClick = () => {
    fileInputField.current.click();
  };

  const addNewFiles = newFiles => {
    for (let file of newFiles) {
      if (file.size <= maxFileSizeInBytes) {
        if (!otherProps.multiple) {
          return { file };
        }
        files[file.name] = file;
      }
    }
    return { ...files };
  };

  const callUpdateFilesCb = files => {
    const filesAsArray = convertNestedObjectToArray(files);
    updateFilesCb(filesAsArray);
  };

  const handleNewDragDropFile = e => {
    const { files: newFiles } = e.target;
    if (newFiles.length) {
      let updatedFiles = addNewFiles(newFiles);
      setFiles(updatedFiles);
      callUpdateFilesCb(updatedFiles);
    }
  };

  const removeFile = fileName => {
    delete files[fileName];
    setFiles({ ...files });
    callUpdateFilesCb({ ...files });
  };

  return (
    <section className="addAsset">
      <div className="upload">
        <h4 className="upload_title">Upload</h4>
        <section className="fileUploadContainer">
          <label className="fileUploadContainer_inputLabel">{label}</label>
          <p className="fileUploadContainer_dragDropText">
            Drag and drop your files anywhere or
          </p>
          <button
            type="button"
            onClick={handleUploadBtnClick}
            className="uploadFileBtn">
            <span className="iconXaxis iconXaxis-upload"></span>
            <span> Upload {otherProps.multiple ? 'files' : 'a file'}</span>
          </button>
          <input
            className="formField"
            type="file"
            ref={fileInputField}
            onChange={handleNewDragDropFile}
            title=""
            value=""
            {...otherProps}
          />
        </section>
      </div>

      {/* Sección preview que debería ir en el componente <Preview/> */}

      <div className="preview">
        <h4 className="preview_title">Preview</h4>
        <article className="filePreviewContainer">
          <section className="previewList">
            {Object.keys(files).map((fileName, index) => {
              let file = files[fileName];
              let isImageFile = file.type.split('/')[0] === 'image';
              return (
                <figure key={fileName} className="previewContainer">
                  {isImageFile && (
                    <img
                      className="imagePreview"
                      src={URL.createObjectURL(file)}
                      alt={`file preview ${index}`}
                    />
                  )}
                  {isImageFile ?? (
                    <div className="fileMetaData">
                      <span>{file.name}</span>
                      <aside>
                        <span>{convertBytesToKB(file.size)} kb</span>
                        <span
                          className="iconXaxis iconXaxis-trash-alt removeFileIcon"
                          onClick={() => removeFile(fileName)}
                        />
                      </aside>
                    </div>
                  )}
                </figure>
              );
            })}
          </section>
        </article>
      </div>
    </section>
  );
};

export default DragDropFile;
