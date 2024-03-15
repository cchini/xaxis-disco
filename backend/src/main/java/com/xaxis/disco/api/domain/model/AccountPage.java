package com.xaxis.disco.api.domain.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AccountPage {

    private long id;
    private int accountPlatformId;
    private String pageId;
    private String pageName;
    private int platformId;
    private Platform platform;
}