package com.xaxis.disco.api.adapters.inbound.api.response;

import com.xaxis.disco.api.domain.model.Account;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Builder
@Getter
@Setter
public class AccountClientResponse {

    private List<Account> accounts;

}
