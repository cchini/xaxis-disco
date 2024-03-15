package com.xaxis.disco.api.adapters.outbound.acl;

import com.xaxis.disco.api.domain.model.BusinessManager;
import com.xaxis.disco.api.domain.model.Page;
import com.xaxis.disco.api.domain.model.meta.WrapperMeta;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;


@FeignClient(name = "meta-api", url = "${api.meta}")
public interface MetaApi {

    @GetMapping("/{accountId}/accounts?fields=name&access_token={accessToken}")
    WrapperMeta<List<Page>> getPagesBy(@RequestParam String accountId, @RequestParam String accessToken);

    @GetMapping("/{accountId}/businesses?access_token={accessToken}")
    WrapperMeta<List<BusinessManager>> getBusinessManagerBy(@RequestParam String accountId, @RequestParam String accessToken);

}

