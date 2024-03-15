package com.xaxis.disco.api.adapters.inbound.api.controller;

import com.amazonaws.services.simpleemail.model.SendEmailResult;
import com.xaxis.disco.api.domain.model.Account;
import com.xaxis.disco.api.domain.service.AccountService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("account/")
@AllArgsConstructor
public class AccountController implements AccountControllerDoc {

    private AccountService accountService;

    @GetMapping
    public Account get() {
        return accountService.get();
    }

    @PostMapping("sendMail/")
    public SendEmailResult sendMail(@RequestParam String to) {
        return accountService.sendMail(to);
    }

}
