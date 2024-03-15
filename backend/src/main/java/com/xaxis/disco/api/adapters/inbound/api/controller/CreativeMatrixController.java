package com.xaxis.disco.api.adapters.inbound.api.controller;

import com.xaxis.disco.api.adapters.inbound.api.response.CreativeMatrixResponse;
import com.xaxis.disco.api.domain.model.AdCreativeResponse;
import com.xaxis.disco.api.domain.service.CreativeMatrixService;
import com.xaxis.disco.api.domain.service.platform.MetaService;
import com.xaxis.disco.api.domain.service.platform.TikTokService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("creative-matrix/")
@AllArgsConstructor
public class CreativeMatrixController implements CreativeMatrixControllerDoc {

    private CreativeMatrixService matrixService;
    private MetaService metaService;
    private TikTokService tikTokService;

    @GetMapping
    public CreativeMatrixResponse getBy() {
        return CreativeMatrixResponse.builder().creativeMatrixList(matrixService.get()).build();
    }

    @PostMapping
    public AdCreativeResponse adCreative() {
        //metaService.AdImage();
        return metaService.AdCreative();
        //   tikTokService.getBusiness();
        // tikTokService.getPages("6996025616369778690");

    }
}
