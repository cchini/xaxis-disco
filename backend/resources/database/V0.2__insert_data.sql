INSERT INTO  creative_matrix_status(
	id, name, code)
	VALUES(1, 'active', 'ACTIVE'),
	(2, 'inactive', 'INACTIVE');

INSERT INTO  campaign_status(
	id, name, code)
	VALUES (1, 'active', 'ACTIVE'),
	(2, 'inactive', 'INACTIVE'),
	(3, 'pending', 'PENDING'),
	(4, 'error', 'ERROR');
	 
INSERT INTO  account_platform_status( id, name, code)
	VALUES (1, 'active', 'ACTIVE'),
	(2, 'inactive', 'INACTIVE'),
	(3, 'pending', 'PENDING'),
	(4, 'error', 'ERROR');

INSERT INTO  platform_owner( id, name, code)
	VALUES (1, 'Meta','META'),
	 (2, 'Tik Tok', 'TIKTOK'),
	  (3, 'Sona', 'SONA');

INSERT INTO  platform( id, name, code, enabled, platform_owner_id)
	VALUES (1, 'Facebook', 'FACEBOOK',true, 1),
	(2, 'Instagram', 'INSTAGRAM',true, 1),
	(3, 'Messenger', 'MESSENGER',true, 1),
	(4, 'Tik Tok', 'TIKTOK',true, 1),
	(5, 'Sona', 'SONA',true, 1);
	
INSERT INTO  client(  trade_name, deleted, uuid)
	VALUES (  'cliente 1', false , 'e6b32a48-4636-41c5-9da0-50b2cd903f6c');
	
INSERT INTO account( client_id, name, deleted, country_name, created, modified)
	VALUES ( (select id from client limit 1), 'EMEA - GETIR - UK', false, 'UK', now(), now());
	
INSERT INTO account_platform(account_id, business_manager_id, business_manager_name, status_id, platform_owner_id, created, modified)
	VALUES ( ( select id  from account limit 1), 'business_manager_Meta_id', 'business_manager_Meta_name', 
			1, 1, now(), now()),
			( ( select id  from account limit 1), 'business_manager_TikTok_id', 'business_manager_TikTok_name', 
			1, 3, now(), now());	
	
INSERT INTO account_page(account_platform_id, platform_id, page_id, page_name, deleted, created, modified)
	VALUES ( (select  id from account_platform ascending limit 1) , 1, 'page_id_1','page_name_1', false, now(), now()),
	( (select  id from account_platform ascending limit 1) , 2, 'page_id_2','page_name_2', false, now(), now()),
	(( select  id from account_platform descending limit 1) , 4, 'page_id_1','page_name_1', false, now(), now());
	
INSERT INTO campaign(  account_id, name, start_date, end_date, budget, kpi, goal, template_name, status_id, created, modified,type_description)
	VALUES ( (select id  from account limit 1), '2022_May_Getir_All_Channels_1', '2022-09-18', '2022-09-20', 50, 'clicks', 2000, null, 1, now(), now(),'FB & IG,TikTok, SONA'),
	((select id  from account limit 1), '2022_May_Getir_All_Channels_2', '2022-09-18', '2022-09-20', 50, 'clicks', 2000, null, 1, now(), now(),'FB & IG,TikTok, SONA'),
	((select id  from account limit 1), '2022_May_Getir_All_Channels_3', '2022-09-18', '2022-09-20', 50, 'clicks', 2000, null, 1, now(), now(),'FB & IG,TikTok, SONA'),
	((select id  from account limit 1), '2022_May_Getir_All_Channels_4', '2022-09-28','2022-09-28',60,'kpi',6000,null,1,'2022-09-19T02:44:03.355-00:00',now(), 'FB & IG, SONA'),
((select id from account limit 1),'2022_May_Getir_All_Channels_5','2022-09-28T02:44:03.355+00:00','2022-09-28T02:44:03.355+00:00',60,'kpi',8000,null,1,'2022-09-21T02:44:03.355-00:00', now(), 'TikTok'),
((select id from account limit 1),'2022_May_Getir_All_Channels_6','2022-09-28T02:44:03.355+00:00','2022-09-28T02:44:03.355+00:00',10,'kpi',8000,null,1,'2022-09-23T02:44:03.355-00:00', now(), 'FB & IG,TikTok, SONA'),
((select id from account limit 1),'2022_May_Getir_All_Channels_7','2022-09-28T02:44:03.356+00:00','2022-09-28T02:44:03.356+00:00',10,'kpi',8000,null,1,'2022-09-24T02:44:03.356-00:00', now(), 'SONA'),
((select id from account limit 1),'2022_May_Getir_All_Channels_8','2022-09-28T02:44:03.356+00:00','2022-09-28T02:44:03.356+00:00',10,'kpi',9000,null,1,'2022-09-24T02:44:03.356-00:00', now(), 'FB & IG,TikTok'),
((select id from account limit 1),'2022_May_Getir_All_Channels_9','2022-09-28T02:44:03.357+00:00','2022-09-28T02:44:03.357+00:00',10,'kpi',9500,null,1,'2022-09-18T02:44:03.357-00:00', now(), 'FB & IG, SONA'),
((select id from account limit 1),'2022_May_Getir_All_Channels_10','2022-09-28T02:44:03.358+00:00','2022-09-28T02:44:03.358+00:00',10,'kpi',950,null,1,'2022-09-17T02:44:03.358-00:00', now(), 'FB & IG');
	
INSERT INTO  creative_matrix(
	name, template_name, status_id, deleted, account_id, created, modified,type_description)
	VALUES ( 'Creattive_Matrix_2022_May_Getir_All_Channels_1', null, 1, false, (select id  from account limit 1) , now(), now(),'FB & IG,TikTok, SONA'),
	( 'Creattive_Matrix_2022_May_Getir_All_Channels_2', null, 1,   false, (select id  from account limit 1) , now(), now(),'FB & IG,TikTok, SONA'),
	( 'Creattive_Matrix_2022_May_Getir_All_Channels_3', null, 1,   false, (select id  from account limit 1) , now(), now(),'FB & IG,TikTok, SONA');