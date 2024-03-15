package com.xaxis.disco.api.adapters.inbound.api.response;

import com.xaxis.disco.api.domain.model.AccountPage;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class AccountPageResponse {

    private AccountPage accountPage;

}
