package com.xaxis.disco.api.domain.model;

import com.xaxis.disco.api.domain.model.enums.PlatformOwner;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
@Builder
public class GenericParametric {

    private short id;
    private String name;
    private String code;


    public static GenericParametric builderPlatformOwnerAs(String code) {
        return GenericParametric.builder()
                .id(PlatformOwner.valueOf(code).getId())
                .code(code).build();
    }


}