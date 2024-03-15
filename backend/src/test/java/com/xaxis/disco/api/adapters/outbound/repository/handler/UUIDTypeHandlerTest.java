package com.xaxis.disco.api.adapters.outbound.repository.handler;

import com.xaxis.disco.api.adapters.outbound.repository.handlers.UUIDTypeHandler;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.UUID;

import static org.assertj.core.api.BDDAssertions.then;
import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class UUIDTypeHandlerTest {

    private UUIDTypeHandler uuidTypeHandler;

    @BeforeEach
    private void setup() {
        uuidTypeHandler = new UUIDTypeHandler();
    }

    @Test
    void setNonNullParameter_OK_NotNullParameter() throws SQLException {

        //Given
        final int index = 1;
        final UUID parameter = UUID.randomUUID();
        PreparedStatement preparedStatement = mock(PreparedStatement.class);
        doNothing().when(preparedStatement).setObject(anyInt(), any(UUID.class));

        //When
        uuidTypeHandler.setNonNullParameter(preparedStatement, index, parameter, null);

        //Then
        verify(preparedStatement).setObject(anyInt(), any(UUID.class));
    }

    @Test
    void setNonNullParameter_OK_NullParameter() throws SQLException {

        //Given
        final int index = 1;
        final UUID parameter = null;
        PreparedStatement preparedStatement = mock(PreparedStatement.class);

        //Assert
        assertDoesNotThrow(() -> uuidTypeHandler.setNonNullParameter(preparedStatement, index, parameter, null));
    }

    @Test
    void getNullableResult_OK_ResultSetByColumnName() throws SQLException {

        //Given
        final String columnName = "test";
        final String uuid = "c1b3f843-74da-4fc0-9cec-f4d5b096ea9f";
        ResultSet resultSet = mock(ResultSet.class);
        when(resultSet.getString(anyString())).thenReturn(uuid);

        //When
        UUID result = uuidTypeHandler.getNullableResult(resultSet, columnName);

        //Then
        then(result).isEqualTo(UUID.fromString(uuid));
    }

    @Test
    void getNullableResult_ExpectError_ResultSetByColumnName() throws SQLException {

        //Given
        final String columnName = "test";
        final String uuid = "";
        ResultSet resultSet = mock(ResultSet.class);


        //When
        UUID result = uuidTypeHandler.getNullableResult(resultSet, columnName);

        //Then
        then(result).isNull();
    }

    @Test
    void getNullableResult_OK_ResultSetByIndex() throws SQLException {

        //Given
        final int index = 1;
        final String uuid = "c1b3f843-74da-4fc0-9cec-f4d5b096ea9f";
        ResultSet resultSet = mock(ResultSet.class);
        when(resultSet.getString(anyInt())).thenReturn(uuid);

        //When
        UUID result = uuidTypeHandler.getNullableResult(resultSet, index);

        //Then
        then(result).isEqualTo(UUID.fromString(uuid));
    }

    @Test
    void getNullableResult_ExpectError_ResultSetByIndex() throws SQLException {

        //Given
        final int index = 1;
        final String uuid = "";
        ResultSet resultSet = mock(ResultSet.class);
        when(resultSet.getString(anyInt())).thenReturn(uuid);

        //When
        UUID result = uuidTypeHandler.getNullableResult(resultSet, index);

        //Then
        then(result).isNull();
    }

    @Test
    void getNullableResult_OK_CallableStatementByIndex() throws SQLException {

        //Given
        final int index = 1;
        final String uuid = "c1b3f843-74da-4fc0-9cec-f4d5b096ea9f";
        CallableStatement callableStatement = mock(CallableStatement.class);
        when(callableStatement.getString(anyInt())).thenReturn(uuid);

        //When
        UUID result = uuidTypeHandler.getNullableResult(callableStatement, index);

        //Then
        then(result).isEqualTo(UUID.fromString(uuid));
    }

    @Test
    void getNullableResult_ExpectError_CallableStatementByIndex() throws SQLException {

        //Given
        final int index = 1;
        final String uuid = "";
        CallableStatement callableStatement = mock(CallableStatement.class);
        when(callableStatement.getString(anyInt())).thenReturn(uuid);

        //When
        UUID result = uuidTypeHandler.getNullableResult(callableStatement, index);

        //Then
        then(result).isNull();
    }
}
