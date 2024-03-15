package com.xaxis.disco.api.adapters.inbound.api.controller;

import com.xaxis.disco.api.adapters.inbound.api.response.CreativeMatrixResponse;
import com.xaxis.disco.api.domain.model.AdCreativeResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;

@Tag(name = "Creative Matrix")
public interface CreativeMatrixControllerDoc {

    @Operation(summary = "Obtiene creative matrix creados")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "OK",
                    content = {@Content(schema = @Schema(implementation = CreativeMatrixResponse.class))})
    })
    CreativeMatrixResponse getBy();

    @Operation(summary = "Genera un nuevo creativo en Meta")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "OK",
                    content = {@Content(schema = @Schema(implementation = CreativeMatrixResponse.class))})
    })
    AdCreativeResponse adCreative();
}
