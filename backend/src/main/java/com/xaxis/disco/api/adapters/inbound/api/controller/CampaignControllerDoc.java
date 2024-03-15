package com.xaxis.disco.api.adapters.inbound.api.controller;

import com.xaxis.disco.api.adapters.inbound.api.response.CampaignResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;

@Tag(name = "Campaign")
public interface CampaignControllerDoc {

    @Operation(summary = "Obtiene campañas creadas")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "OK",
                    content = {@Content(schema = @Schema(implementation = CampaignResponse.class))})
    })
    CampaignResponse get();
}
