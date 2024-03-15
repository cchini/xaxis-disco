package com.xaxis.disco.api.domain.model;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.util.List;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AccountPlatform {

    private int id;
    private long accountId;
    private String businessManagerId;
    private String businessManagerName;
    private short statusId;
    private short platformOwnerId;
    private Timestamp created;
    private Timestamp modified;

    private GenericParametric status;
    private GenericParametric platformOwner;
    private List<AccountPage> pages;

}

