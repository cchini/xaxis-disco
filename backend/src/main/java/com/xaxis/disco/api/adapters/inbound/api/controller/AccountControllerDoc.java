package com.xaxis.disco.api.adapters.inbound.api.controller;

import com.amazonaws.services.simpleemail.model.SendEmailResult;
import com.xaxis.disco.api.domain.model.Account;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.RequestParam;

@Tag(name = "Account")
public interface AccountControllerDoc {

    @Operation(summary = "obtiene las cuentas asociadas a un cliente")
    @ApiResponses(value = {

            @ApiResponse(responseCode = "404", description = "Not Found", content = @Content)
    })
    Account get();


    @Operation(summary = "envía aprobación de conexión")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "OK",
                    content = {@Content(schema = @Schema(implementation = SendEmailResult.class))}),
            @ApiResponse(responseCode = "201", description = "Created"
            )})
    SendEmailResult sendMail(@RequestParam String to);
}
