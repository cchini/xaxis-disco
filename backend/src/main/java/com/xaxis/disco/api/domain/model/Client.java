package com.xaxis.disco.api.domain.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Builder
@Getter
@Setter
@AllArgsConstructor
public class Client {

    private int id;
    private String tradeName;
    private UUID uuid;
    private boolean deleted;
}
