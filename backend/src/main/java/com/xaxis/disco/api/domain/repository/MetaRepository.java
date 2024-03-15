package com.xaxis.disco.api.domain.repository;

import com.xaxis.disco.api.domain.model.BusinessManager;
import com.xaxis.disco.api.domain.model.Page;

import java.util.List;

public interface MetaRepository {

    List<Page> getPageBy(String accountId, String token);

    List<BusinessManager> getBusinessManagerBy(String accountId, String token);

}
