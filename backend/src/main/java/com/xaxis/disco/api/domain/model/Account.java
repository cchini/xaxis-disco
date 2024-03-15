package com.xaxis.disco.api.domain.model;

import lombok.*;

import java.sql.Timestamp;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Builder
public class Account {

    private long id;
    private int clientId;
    private String name;
    private String countryName;
    private Timestamp created;
    private Timestamp modified;

    private List<AccountPlatform> ownerPlatforms;


}