package com.xaxis.disco.api.domain.model.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter

public enum PlatformEnum {
    FACEBOOK((short) 1),
    INSTAGRAM((short) 2),
    MESSENGER((short) 3),
    TIKTOK((short) 4),
    SONA((short) 5);

    private short id;
}
