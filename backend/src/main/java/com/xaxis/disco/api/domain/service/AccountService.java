package com.xaxis.disco.api.domain.service;

import com.amazonaws.services.simpleemail.AmazonSimpleEmailService;
import com.amazonaws.services.simpleemail.model.*;
import com.xaxis.disco.api.domain.model.*;
import com.xaxis.disco.api.domain.model.enums.AccountPlatformStatus;
import com.xaxis.disco.api.domain.model.enums.PlatformEnum;
import com.xaxis.disco.api.domain.model.enums.PlatformOwner;
import com.xaxis.disco.api.domain.repository.AccountRepository;
import com.xaxis.disco.api.domain.service.platform.MetaService;
import com.xaxis.disco.api.domain.service.platform.TikTokService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;


@Slf4j
@Service
@AllArgsConstructor
public class AccountService {

    private static final String CHAR_SET = "UTF-8";
    private static final String SUBJECT = "Follow these steps to approve SONA in your business manager account";
    private final AccountRepository accountRepository;
    private final AmazonSimpleEmailService emailService;
    private final MetaService metaService;
    private final TikTokService tikTokService;

    public SendEmailResult sendMail(String mailTo) {

        int requestTimeout = 3000;
        SendEmailRequest request = new SendEmailRequest()
                .withDestination(
                        new Destination().withToAddresses(mailTo))
                .withMessage(new Message()
                        .withBody(new Body()
                                .withText(new Content()
                                        .withCharset(CHAR_SET).withData("Hello world!")))
                        .withSubject(new Content()
                                .withCharset(CHAR_SET).withData(SUBJECT)))
                .withSource("giannecchini.a@gmail.com")
                .withSdkRequestTimeout(requestTimeout);
        return emailService.sendEmail(request);

    }

    public Account get() {


        var businessServiceMeta = metaService.getBusiness();
        var pagesServiceMeta = metaService.getPages();
        var businessServiceTikTok = tikTokService.getBusiness();


        var pageFb = pagesServiceMeta.get(0);
        var pageInstagram = Page.builder()
                .id("5345345345")
                .name("Disco Test 2")
                .build();

        var businessMeta = businessServiceMeta.get(0);
        var businessTikTok = businessServiceTikTok.get(0);
        var pagesServiceTikTok = tikTokService.getPages(businessTikTok.getId());

        return Account.builder()
                .countryName("UK")
                .name("EMEA - GETIR - UK")
                .ownerPlatforms(List.of(AccountPlatform.builder()
                                .businessManagerName(businessMeta.getName())
                                .businessManagerId(businessMeta.getId())
                                .status(GenericParametric.builder()
                                        .code(AccountPlatformStatus.ACTIVE.name())
                                        .id(AccountPlatformStatus.ACTIVE.getId())
                                        .build())
                                .platformOwner(GenericParametric.builder()
                                        .code(PlatformOwner.META.name())
                                        .name(PlatformOwner.META.name().substring(0, 1).toUpperCase() + PlatformOwner.META.name().substring(1).toLowerCase())
                                        .id(PlatformOwner.META.getId())
                                        .build())
                                .statusId(AccountPlatformStatus.ACTIVE.getId())
                                .pages(List.of(AccountPage.builder()
                                                .platform(Platform.builder()
                                                        .code(PlatformEnum.FACEBOOK.name())
                                                        .name(PlatformEnum.FACEBOOK.name().substring(0, 1).toUpperCase() + PlatformEnum.FACEBOOK.name().substring(1).toLowerCase())
                                                        .id(PlatformEnum.FACEBOOK.getId())
                                                        .build())
                                                .pageId(pageFb.getId())
                                                .pageName(pageFb.getName())
                                                .build(),
                                        AccountPage.builder()
                                                .platform(Platform.builder()
                                                        .code(PlatformEnum.INSTAGRAM.name())
                                                        .name(PlatformEnum.INSTAGRAM.name().substring(0, 1).toUpperCase() + PlatformEnum.INSTAGRAM.name().substring(1).toLowerCase())
                                                        .id(PlatformEnum.INSTAGRAM.getId())
                                                        .build())
                                                .pageId(pageInstagram.getId())
                                                .pageName(pageInstagram.getName())
                                                .build()))
                                .build(),
                        AccountPlatform.builder()
                                .businessManagerName(businessTikTok.getName())
                                .businessManagerId(businessTikTok.getId())
                                .status(GenericParametric.builder()
                                        .code(AccountPlatformStatus.ACTIVE.name())
                                        .id(AccountPlatformStatus.ACTIVE.getId())
                                        .build())
                                .platformOwner(GenericParametric.builder()
                                        .code(PlatformOwner.TIKTOK.name())
                                        .name(PlatformOwner.TIKTOK.name().substring(0, 1).toUpperCase() + PlatformOwner.TIKTOK.name().substring(1).toLowerCase())
                                        .id(PlatformOwner.TIKTOK.getId())
                                        .build())
                                .statusId(AccountPlatformStatus.ACTIVE.getId())
                                .pages(List.of(AccountPage.builder()
                                        .platform(Platform.builder()
                                                .name(PlatformEnum.TIKTOK.name().substring(0, 1).toUpperCase() + PlatformEnum.TIKTOK.name().substring(1).toLowerCase())
                                                .code(PlatformEnum.TIKTOK.name())
                                                .id(PlatformEnum.TIKTOK.getId())
                                                .build())
                                        .pageId(pageFb.getId())
                                        .pageName(pageFb.getName())
                                        .build()))
                                .build()))
                .build();
    }
}