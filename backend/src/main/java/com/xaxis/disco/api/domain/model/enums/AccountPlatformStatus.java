package com.xaxis.disco.api.domain.model.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum AccountPlatformStatus {
    ACTIVE((short) 1),
    INACTIVE((short) 2),
    PENDING((short) 3),
    ERROR((short) 4);

    private short id;
}
