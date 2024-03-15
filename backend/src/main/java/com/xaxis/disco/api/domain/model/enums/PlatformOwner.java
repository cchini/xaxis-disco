package com.xaxis.disco.api.domain.model.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter

public enum PlatformOwner {
    META((short) 1),
    TIKTOK((short) 2),
    SONA((short) 3);

    private short id;
}
