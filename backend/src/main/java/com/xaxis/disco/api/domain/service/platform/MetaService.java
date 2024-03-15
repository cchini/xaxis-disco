package com.xaxis.disco.api.domain.service.platform;

import com.facebook.ads.sdk.*;
import com.xaxis.disco.api.domain.model.AdCreativeResponse;
import com.xaxis.disco.api.domain.model.BusinessManager;
import com.xaxis.disco.api.domain.model.Page;
import com.xaxis.disco.api.domain.repository.MetaRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.File;
import java.util.List;

@Service
@Slf4j
public class MetaService {

    @Value("${meta.appSecret}")
    private String appSecret;
    @Value("${meta.accessToken}")
    private String accessToken;
    @Value("${meta.accountId}")
    private String accountId;
    @Autowired
    private MetaRepository metaRepository;

    public void AdImage() throws APIException {
        String access_token = accessToken; // "<ACCESS_TOKEN>";
        String app_secret = appSecret;// "<APP_SECRET>";
        String app_id = "4985092974930782";// "<APP_ID>";
        String id = "act_1427457994442905"; //"<AD_ACCOUNT_ID>";
        APIContext context = new APIContext(access_token).enableDebug(true);


        var adImage = new AdAccount("act_1427457994442905", context).createAdImage()
                .addUploadFile("filename", new File("C:\\Users\\joara\\OneDrive\\Escritorio\\mono.jpg"))
                .execute();
    }

    public List<Page> getPages() {
        return metaRepository.getPageBy(accountId, accessToken);
    }

    public List<BusinessManager> getBusiness() {
        return metaRepository.getBusinessManagerBy(accountId, accessToken);
    }

    public AdCreativeResponse AdCreative() {

        try {
            String access_token = accessToken; // "<ACCESS_TOKEN>";
            String app_secret = appSecret;// "<APP_SECRET>";
            String app_id = "4985092974930782";// "<APP_ID>";
            String id = "act_1427457994442905"; //"<AD_ACCOUNT_ID>";
            APIContext context = new APIContext(access_token).enableDebug(true);

            new AdAccount(id, context).createAdCreative()
                    .setName("Creative")
                    .setObjectStorySpec(
                            new AdCreativeObjectStorySpec()
                                    .setFieldLinkData(
                                            new AdCreativeLinkData()
                                                    .setFieldCallToAction(
                                                            new AdCreativeLinkDataCallToAction()
                                                                    .setFieldType(AdCreativeLinkDataCallToAction.EnumType.VALUE_LIKE_PAGE)
                                                                    .setFieldValue(
                                                                            new AdCreativeLinkDataCallToActionValue()
                                                                                    .setFieldPage("112122981631024"/*<pageID>*/)
                                                                    )
                                                    )
                                                    .setFieldImageHash("ed4abd577e08c49edc57694f19670815")

                                                    .setFieldLink("https://facebook.com/112122981631024"/*"https://facebook.com/<pageID>"*/)
                                                    .setFieldMessage("Creative message")
                                    )
                                    .setFieldPageId("112122981631024" /*"<pageID>"*/)
                    )
                    .execute();
            return AdCreativeResponse.builder()
                    .status("OK")
                    .build();
        } catch (Exception a) {
            log.error("FACE", a);
            return AdCreativeResponse.builder()
                    .status("ERROR")
                    .messageResult(a.getMessage())
                    .build();
        }
    }
}
