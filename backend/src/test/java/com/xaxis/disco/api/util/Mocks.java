package com.xaxis.disco.api.util;

import com.xaxis.disco.api.domain.model.*;
import com.xaxis.disco.api.domain.model.meta.WrapperMeta;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.Date;
import java.util.List;
import java.util.UUID;

public class Mocks {

    public static List<Platform> getPlatforms() {
        return List.of(Platform.builder()
                .id(1)
                .name("name")
                .code("CODE")
                .build());
    }

    public static Client getSaleDoc() {
        return Client.builder()
                .id(1)
                .tradeName("name")
                .build();
    }

    public static List<Page> getPages() {
        return List.of(
                Page.builder()
                        .id("page id 1")
                        .name("page name 1")
                        .build());
    }

    public static List<BusinessManager> getBusinessManagers() {
        return List.of(
                BusinessManager.builder()
                        .name("businessManagerMock name 1")
                        .id("businessManagerMock id 1")
                        .build(),
                BusinessManager.builder()
                        .name("businessManagerMock name 2")
                        .id("businessManagerMock id 2")
                        .build());
    }

    public static WrapperMeta<List<Page>> getWrapperMetaPages() {
        return new WrapperMeta<>(getPages());
    }

    public static WrapperMeta<List<BusinessManager>> getWrapperMetaBusinessManagers() {
        return new WrapperMeta<>(getBusinessManagers());
    }

    public static List<Campaign> getCampaign() {
        return List.of(Campaign.builder()
                .id(1L)
                .accountId(1)
                .name("name campaign")
                .startDate(Date.from(Instant.now()))
                .endDate(Date.from(Instant.now()))
                .typeDescription("type description")
                .budget(BigDecimal.TEN)
                .kpi("kpi")
                .goal(BigDecimal.TEN)
                .statusId((short) 1)
                .build());
    }

    public static AccountPlatform getAccountPlatform() {
        return AccountPlatform.builder()
                .id(1)
                .accountId(1)
                .businessManagerId("businessManager id")
                .businessManagerName("businessManager name")
                .statusId((short) 1)
                .platformOwnerId((short) 1)
                .build();
    }

    public static AccountPage getAccountPage() {
        return AccountPage.builder()
                .id(1)
                .accountPlatformId(1)
                .pageId("pageId")
                .pageName("pageName")
                .platformId(1)
                .build();
    }

    public static Account getAccount() {
        return Account.builder()
                .countryName("countryName")
                .clientId(1)
                .id(1L)
                .name("name")
                .build();
    }

    public static Client getClient() {
        return Client.builder()
                .id(1)
                .tradeName("tradeName")
                .uuid(UUID.randomUUID())
                .deleted(false)
                .build();
    }

    public static List<CreativeMatrix> getCreativeMatrix() {
        return List.of(CreativeMatrix.builder()
                .id(1L)
                .name("name")
                .statusId((short) 1)
                .typeDescription("typeDescription")
                .accountId(1)
                .deleted(false)
                .build());
    }
}
