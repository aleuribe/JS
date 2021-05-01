//Version 2.0 de la Calculadora de Costo Promedio en Dolares para Cripto Inversiones

//Data cruda de los precios, semanas y anios en arreglos
let aniosLista = [2010	, 2010	, 2010	, 2010	, 2010	, 2010	, 2010	, 2010	, 2010	, 2010	, 2010	, 2010	, 2010	, 2010	, 2010	, 2010	, 2010	, 2010	, 2010	, 2010	, 2010	, 2010	, 2010	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2011	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2012	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2013	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2014	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2015	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2016	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2017	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2018	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2019	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2020	, 2021	, 2021	, 2021	, 2021	, 2021	, 2021	, 2021	, 2021	, 2021	, 2021	, 2021	, 2021	, 2021	, 2021	, 2021	, 2021];
let semanasLista = [30	, 31	, 32	, 33	, 34	, 35	, 36	, 37	, 38	, 39	, 40	, 41	, 42	, 43	, 44	, 45	, 46	, 47	, 48	, 49	, 50	, 51	, 52	, 1	, 2	, 3	, 4	, 5	, 6	, 7	, 8	, 9	, 10	, 11	, 12	, 13	, 14	, 15	, 16	, 17	, 18	, 19	, 20	, 21	, 22	, 23	, 24	, 25	, 26	, 27	, 28	, 29	, 30	, 31	, 32	, 33	, 34	, 35	, 36	, 37	, 38	, 39	, 40	, 41	, 42	, 43	, 44	, 45	, 46	, 47	, 48	, 49	, 50	, 51	, 52	, 1	, 2	, 3	, 4	, 5	, 6	, 7	, 8	, 9	, 10	, 11	, 12	, 13	, 14	, 15	, 16	, 17	, 18	, 19	, 20	, 21	, 22	, 23	, 24	, 25	, 26	, 27	, 28	, 29	, 30	, 31	, 32	, 33	, 34	, 35	, 36	, 37	, 38	, 39	, 40	, 41	, 42	, 43	, 44	, 45	, 46	, 47	, 48	, 49	, 50	, 51	, 52	, 1	, 2	, 3	, 4	, 5	, 6	, 7	, 8	, 9	, 10	, 11	, 12	, 13	, 14	, 15	, 16	, 17	, 18	, 19	, 20	, 21	, 22	, 23	, 24	, 25	, 26	, 27	, 28	, 29	, 30	, 31	, 32	, 33	, 34	, 35	, 36	, 37	, 38	, 39	, 40	, 41	, 42	, 43	, 44	, 45	, 46	, 47	, 48	, 49	, 50	, 51	, 52	, 1	, 2	, 3	, 4	, 5	, 6	, 7	, 8	, 9	, 10	, 11	, 12	, 13	, 14	, 15	, 16	, 17	, 18	, 19	, 20	, 21	, 22	, 23	, 24	, 25	, 26	, 27	, 28	, 29	, 30	, 31	, 32	, 33	, 34	, 35	, 36	, 37	, 38	, 39	, 40	, 41	, 42	, 43	, 44	, 45	, 46	, 47	, 48	, 49	, 50	, 51	, 52	, 1	, 2	, 3	, 4	, 5	, 6	, 7	, 8	, 9	, 10	, 11	, 12	, 13	, 14	, 15	, 16	, 17	, 18	, 19	, 20	, 21	, 22	, 23	, 24	, 25	, 26	, 27	, 28	, 29	, 30	, 31	, 32	, 33	, 34	, 35	, 36	, 37	, 38	, 39	, 40	, 41	, 42	, 43	, 44	, 45	, 46	, 47	, 48	, 49	, 50	, 51	, 52	, 1	, 2	, 3	, 4	, 5	, 6	, 7	, 8	, 9	, 10	, 11	, 12	, 13	, 14	, 15	, 16	, 17	, 18	, 19	, 20	, 21	, 22	, 23	, 24	, 25	, 26	, 27	, 28	, 29	, 30	, 31	, 32	, 33	, 34	, 35	, 36	, 37	, 38	, 39	, 40	, 41	, 42	, 43	, 44	, 45	, 46	, 47	, 48	, 49	, 50	, 51	, 52	, 1	, 2	, 3	, 4	, 5	, 6	, 7	, 8	, 9	, 10	, 11	, 12	, 13	, 14	, 15	, 16	, 17	, 18	, 19	, 20	, 21	, 22	, 23	, 24	, 25	, 26	, 27	, 28	, 29	, 30	, 31	, 32	, 33	, 34	, 35	, 36	, 37	, 38	, 39	, 40	, 41	, 42	, 43	, 44	, 45	, 46	, 47	, 48	, 49	, 50	, 51	, 52	, 1	, 2	, 3	, 4	, 5	, 6	, 7	, 8	, 9	, 10	, 11	, 12	, 13	, 14	, 15	, 16	, 17	, 18	, 19	, 20	, 21	, 22	, 23	, 24	, 25	, 26	, 27	, 28	, 29	, 30	, 31	, 32	, 33	, 34	, 35	, 36	, 37	, 38	, 39	, 40	, 41	, 42	, 43	, 44	, 45	, 46	, 47	, 48	, 49	, 50	, 51	, 52	, 1	, 2	, 3	, 4	, 5	, 6	, 7	, 8	, 9	, 10	, 11	, 12	, 13	, 14	, 15	, 16	, 17	, 18	, 19	, 20	, 21	, 22	, 23	, 24	, 25	, 26	, 27	, 28	, 29	, 30	, 31	, 32	, 33	, 34	, 35	, 36	, 37	, 38	, 39	, 40	, 41	, 42	, 43	, 44	, 45	, 46	, 47	, 48	, 49	, 50	, 51	, 52	, 1	, 2	, 3	, 4	, 5	, 6	, 7	, 8	, 9	, 10	, 11	, 12	, 13	, 14	, 15	, 16	, 17	, 18	, 19	, 20	, 21	, 22	, 23	, 24	, 25	, 26	, 27	, 28	, 29	, 30	, 31	, 32	, 33	, 34	, 35	, 36	, 37	, 38	, 39	, 40	, 41	, 42	, 43	, 44	, 45	, 46	, 47	, 48	, 49	, 50	, 51	, 52	, 1	, 2	, 3	, 4	, 5	, 6	, 7	, 8	, 9	, 10	, 11	, 12	, 13	, 14	, 15	, 16];
let preciosListaBTC = [0.1	, 0.1	, 0.1	, 0.1	, 0.1	, 0.1	, 0.1	, 0.1	, 0.1	, 0.1	, 0.1	, 0.1	, 0.1	, 0.1	, 0.2	, 0.4	, 0.3	, 0.3	, 0.3	, 0.2	, 0.2	, 0.2	, 0.2	, 0.3	, 0.3	, 0.4	, 0.4	, 0.4	, 0.9	, 1.1	, 0.9	, 1	, 0.9	, 0.9	, 0.8	, 0.9	, 0.8	, 0.7	, 1	, 1.7	, 3.5	, 3.6	, 7.2	, 6.1	, 8.3	, 18.9	, 14.6	, 16.9	, 17.5	, 15.4	, 14.4	, 13.7	, 13.7	, 13.5	, 6.6	, 10.1	, 11.4	, 8.6	, 8.5	, 4.8	, 4.8	, 5.5	, 5	, 4	, 3.8	, 3.2	, 3.6	, 3	, 3	, 2.2	, 2.5	, 2.8	, 3	, 3.2	, 3.9	, 6.8	, 6.8	, 6.2	, 5.6	, 5.9	, 5.6	, 4.2	, 4.8	, 4.6	, 4.8	, 5.2	, 4.7	, 4.9	, 4.7	, 5	, 5.3	, 5	, 5.1	, 4.9	, 5.1	, 5.1	, 5.3	, 5.6	, 6.4	, 6.4	, 6.7	, 6.8	, 7.5	, 8.9	, 8.9	, 11	, 11.5	, 11.6	, 10.5	, 10	, 11	, 11.8	, 12.2	, 12.4	, 12.5	, 11.9	, 11.7	, 10.3	, 10.6	, 10.9	, 11.8	, 12.4	, 12.6	, 13.4	, 13.5	, 13.4	, 13.4	, 13.4	, 14.2	, 15.6	, 17.9	, 19.6	, 23.6	, 27.2	, 29.8	, 34.3	, 46.8	, 47	, 64.3	, 92.2	, 142.6	, 93	, 126.6	, 128	, 112.9	, 115.6	, 123.2	, 132	, 129.3	, 107.9	, 99.8	, 108.2	, 95	, 69.7	, 98.3	, 89.8	, 94.4	, 104.9	, 103	, 112.8	, 119.6	, 141	, 129	, 136.7	, 134.4	, 142.5	, 136.7	, 142.9	, 183.1	, 188.6	, 211.7	, 367.8	, 462	, 832.5	, 1205.7	, 697	, 908.9	, 640.5	, 762	, 924.7	, 1005.3	, 905.7	, 961	, 940.4	, 648.8	, 371.1	, 255.6	, 557.4	, 609.2	, 624	, 564.3	, 477.1	, 456.6	, 437.6	, 506	, 457.9	, 438.6	, 451.9	, 452.8	, 520.5	, 627.9	, 651.7	, 583.4	, 597	, 597.6	, 623	, 635.9	, 627	, 596	, 591.7	, 589.5	, 522	, 497.7	, 506	, 484.5	, 478.2	, 411.5	, 399	, 335.3	, 361.2	, 390.9	, 346.7	, 325.4	, 343.5	, 374.9	, 352	, 376.3	, 376.3	, 348.2	, 330.4	, 315.3	, 287.1	, 273.4	, 199.6	, 248.2	, 218.5	, 227.7	, 258.6	, 244.4	, 254.1	, 274.9	, 281.6	, 259.7	, 252	, 252.9	, 236.5	, 223.4	, 226.1	, 235.3	, 241.4	, 236.2	, 238.9	, 233.2	, 224.7	, 232.5	, 245	, 250.7	, 260.5	, 292	, 274	, 288.7	, 280.5	, 258.6	, 260.5	, 229.5	, 228.5	, 233.7	, 235.6	, 231.1	, 234.3	, 238.6	, 245.4	, 269.6	, 282.6	, 311.2	, 385.1	, 331.8	, 324.7	, 355.8	, 386.7	, 432.3	, 461.2	, 415.4	, 433.7	, 448.3	, 385	, 388.6	, 377.8	, 376.7	, 390.1	, 440.1	, 431.3	, 399	, 410.4	, 408.7	, 416.5	, 418.5	, 418	, 430	, 450.1	, 448.5	, 458.5	, 456.4	, 443.6	, 524.2	, 572	, 591.6	, 753.8	, 663.5	, 698.1	, 651.8	, 660.7	, 655.2	, 654.7	, 586.5	, 584.6	, 582.6	, 570.3	, 598.8	, 624.5	, 607.1	, 602.6	, 613.4	, 617.7	, 637	, 655.5	, 715	, 702.1	, 704.3	, 747.9	, 734.1	, 764.2	, 774	, 787.2	, 891.1	, 888.9	, 819.6	, 919.8	, 918.5	, 1031.8	, 1008.3	, 1052.3	, 1149.1	, 1264.3	, 1179.2	, 971.4	, 966.3	, 1086.1	, 1180.8	, 1177	, 1240.9	, 1336.3	, 1545.3	, 1763.7	, 2040.2	, 2052.4	, 2545.4	, 2900.3	, 2655.1	, 2590.1	, 2424.6	, 2564.9	, 1975.1	, 2836.5	, 2733.5	, 3262.8	, 3871.6	, 4150.5	, 4352.3	, 4573.8	, 4335.1	, 3698.9	, 3788	, 4360.6	, 4435.8	, 5824.7	, 6006.6	, 5726.6	, 7363.8	, 6339.9	, 7780.9	, 8754.7	, 10912.7	, 14843.4	, 19345.5	, 14396.5	, 12531.5	, 17172.3	, 14292.2	, 12858.9	, 11467.5	, 9241.1	, 8559.6	, 11073.5	, 9704.3	, 11402.3	, 8762	, 7874.9	, 8547.4	, 6938.2	, 6905.7	, 8004.4	, 8923.1	, 9352.4	, 9853.5	, 8459.5	, 8245.1	, 7361.3	, 7646.6	, 7515.8	, 6505.8	, 6167.3	, 6398.9	, 6765.5	, 6254.8	, 7408.7	, 8234.1	, 7014.3	, 6231.6	, 6379.1	, 6734.8	, 7189.6	, 6184.3	, 6519	, 6729.6	, 6603.9	, 6596.3	, 6321.7	, 6572.2	, 6494.2	, 6386.2	, 6427.1	, 5621.8	, 3920.4	, 4196.2	, 3430.4	, 3228.7	, 3964.4	, 3706.8	, 3785.4	, 3597.2	, 3677.8	, 3570.9	, 3502.5	, 3661.4	, 3616.8	, 4120.4	, 3823.1	, 3944.3	, 4006.4	, 4002.5	, 4111.8	, 5046.2	, 5051.8	, 5290.2	, 5265.9	, 5830.9	, 7190.3	, 7262.6	, 8027.4	, 8545.7	, 7901.4	, 8812.5	, 10721.7	, 11906.5	, 11268	, 11364.9	, 10826.7	, 9492.1	, 10815.7	, 11314.5	, 10218.1	, 10131	, 9594.4	, 10461.1	, 10337.3	, 9993	, 8208.5	, 8127.3	, 8304.4	, 7957.3	, 9230.6	, 9300.6	, 8804.5	, 8497.3	, 7324.1	, 7546.6	, 7510.9	, 7080.8	, 7156.2	, 7321.5	, 7376.8	, 8024.1	, 8916.3	, 8341.6	, 9381.6	, 9895.5	, 9907.7	, 9655.7	, 8543.7	, 8887.8	, 5182.7	, 6186.2	, 6233.7	, 6857.4	, 6867.8	, 7230.8	, 7540.4	, 8966.3	, 9554.6	, 9379.5	, 9177	, 9692.5	, 9669.6	, 9471.3	, 9358.8	, 9008.3	, 9134.4	, 9233.3	, 9170.2	, 9704.1	, 11803.1	, 11764.3	, 11845.3	, 11661.3	, 11468.1	, 10092.2	, 10441.9	, 11081.8	, 10727.9	, 10544.2	, 11298.4	, 11362.1	, 13117.2	, 13797.3	, 14828.4	, 16071	, 18687.2	, 17730.7	, 19146.5	, 18808.9	, 23844	, 26454.4	, 32193.3	, 40151.9	, 36019.5	, 32088.9	, 34283.1	, 39256.6	, 47168.7	, 55923.7	, 46136.7	, 48855.6	, 61195.3	, 58093.4	, 55862.9	, 57059.9	, 59748.4	, 59632.1];
let preciosListaETH = [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 10.31	, 11	, 11.61	, 9.15	, 8.54	, 8.46	, 8.87	, 9.35	, 10.16	, 14	, 11.98	, 13.81	, 14.15	, 11.41	, 14.31	, 12.14	, 10.9	, 11.72	, 14.25	, 12.52	, 10.16	, 11.48	, 11.26	, 11.2	, 12.01	, 12.13	, 12.8	, 12.86	, 13.18	, 12.26	, 12.01	, 12.29	, 10.38	, 11.17	, 10.01	, 9.73	, 9.33	, 7.91	, 8.12	, 7.73	, 7.25	, 9.84	, 9.67	, 10.95	, 10.51	, 11.32	, 11.33	, 12.79	, 13.55	, 18.5	, 21.3	, 34.2	, 50.75	, 50.59	, 44.51	, 49.71	, 52.15	, 73.55	, 96.65	, 89.9	, 123.03	, 149.99	, 217.01	, 325.88	, 364.56	, 296.89	, 255	, 245.23	, 170.15	, 232.01	, 206.76	, 253.87	, 307.22	, 292.78	, 332.72	, 345	, 303.08	, 253	, 285.9	, 303.44	, 311.46	, 339.24	, 299.23	, 293.49	, 299.48	, 313.07	, 346.68	, 464	, 455.51	, 460.92	, 683.25	, 672.59	, 682.22	, 1004.3	, 1380	, 1146	, 1114.8	, 971.49	, 851.39	, 971.54	, 834.36	, 855.91	, 682.52	, 550.27	, 520.45	, 393.96	, 384.87	, 502.52	, 605.59	, 683.49	, 818.33	, 683.94	, 696.76	, 586.76	, 591.3	, 593.8	, 496.93	, 474.14	, 452.67	, 485.4	, 434.09	, 461.52	, 468.78	, 407.09	, 317.59	, 293.89	, 277.61	, 295.31	, 196.79	, 221.94	, 240.82	, 231.87	, 225.18	, 201.22	, 208.04	, 204.36	, 200.23	, 213.21	, 176.53	, 114.43	, 118.23	, 90.57	, 83.9	, 115.84	, 133.67	, 153.49	, 123.75	, 123.02	, 115.83	, 110.68	, 119.44	, 122.87	, 158.3	, 132.76	, 137.52	, 141.15	, 137.53	, 142.65	, 165.55	, 163.19	, 172.73	, 159.41	, 163.68	, 192.27	, 233.89	, 250.68	, 264.31	, 243.42	, 267.75	, 310.38	, 318.48	, 288.08	, 269.16	, 227.86	, 206.62	, 220.89	, 205.93	, 184.81	, 190.15	, 171.62	, 177.74	, 188.16	, 215.22	, 173.62	, 176.43	, 179.87	, 171.91	, 179.62	, 183.01	, 184.96	, 182.42	, 152.46	, 151.95	, 148.28	, 142.03	, 127.61	, 128.35	, 134.33	, 142.67	, 174.19	, 160.44	, 183.64	, 223.23	, 264.87	, 261.64	, 217.52	, 237.32	, 122.69	, 132.58	, 131.03	, 144.01	, 158.18	, 187.45	, 194.01	, 213.96	, 210.22	, 200.51	, 206.62	, 243.63	, 242	, 238.22	, 228.86	, 221.06	, 229.15	, 239.2	, 235.75	, 305.32	, 387.14	, 396.76	, 432.18	, 395.56	, 398.8	, 334.91	, 387.98	, 385.25	, 354.25	, 345.6	, 370.16	, 368.63	, 411.92	, 386.42	, 435.4	, 460.7	, 551.91	, 537.74	, 596.68	, 567.78	, 658.17	, 636.58	, 774.5	, 1275.58	, 1228.27	, 1233.4	, 1376.96	, 1676.63	, 1815.49	, 1913.88	, 1458.93	, 1649.19	, 1921.13	, 1804.6	, 1713.01	, 2008.59	, 2133.79	, 2144.74]
let preciosListaADA = [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 1.0358	, 0.879	, 0.70486	, 0.62132	, 0.464	, 0.381	, 0.41715	, 0.29908	, 0.29351	, 0.20075	, 0.15495	, 0.18688	, 0.15065	, 0.14666	, 0.2074	, 0.28585	, 0.35924	, 0.36857	, 0.26576	, 0.24336	, 0.19581	, 0.22754	, 0.20095	, 0.16235	, 0.13742	, 0.13795	, 0.14781	, 0.13653	, 0.16358	, 0.16427	, 0.12642	, 0.11028	, 0.09833	, 0.09404	, 0.10699	, 0.07753	, 0.06891	, 0.08342	, 0.08434	, 0.08158	, 0.07374	, 0.07764	, 0.07351	, 0.07174	, 0.07541	, 0.06122	, 0.03901	, 0.04136	, 0.03021	, 0.02808	, 0.04158	, 0.04033	, 0.04404	, 0.04288	, 0.04514	, 0.04239	, 0.03927	, 0.04118	, 0.04101	, 0.04846	, 0.04242	, 0.04681	, 0.0512	, 0.06351	, 0.07205	, 0.08988	, 0.08285	, 0.07594	, 0.07051	, 0.06693	, 0.07472	, 0.07882	, 0.08013	, 0.09046	, 0.08357	, 0.09126	, 0.09472	, 0.08998	, 0.07748	, 0.06677	, 0.06264	, 0.0599	, 0.05774	, 0.05198	, 0.04736	, 0.0501	, 0.04478	, 0.04598	, 0.04642	, 0.05178	, 0.03863	, 0.03965	, 0.04041	, 0.03899	, 0.04048	, 0.04237	, 0.04241	, 0.04388	, 0.03789	, 0.04035	, 0.03845	, 0.03624	, 0.03305	, 0.03366	, 0.03437	, 0.03673	, 0.04489	, 0.04314	, 0.05606	, 0.06005	, 0.06425	, 0.05821	, 0.04712	, 0.04878	, 0.02576	, 0.02945	, 0.02975	, 0.03246	, 0.03345	, 0.03653	, 0.04224	, 0.05092	, 0.0515	, 0.05103	, 0.05491	, 0.07688	, 0.08618	, 0.07904	, 0.07953	, 0.07739	, 0.1	, 0.1252	, 0.12267	, 0.14353	, 0.14415	, 0.14678	, 0.13841	, 0.12526	, 0.11626	, 0.08997	, 0.09766	, 0.09142	, 0.09546	, 0.09328	, 0.10496	, 0.10598	, 0.10799	, 0.09298	, 0.10129	, 0.10406	, 0.13354	, 0.16493	, 0.15993	, 0.14426	, 0.1643	, 0.15832	, 0.17734	, 0.33016	, 0.35123	, 0.34556	, 0.36362	, 0.63387	, 0.91115	, 1.11615	, 1.31658	, 1.12902	, 1.10131	, 1.20041	, 1.17679	, 1.16331	, 1.21793	, 1.24033]

//Creamos un arreglo que contenga anios + semanas 
let listaAnioSemana = aniosLista.map( (val, i) => val + "" + semanasLista[i]); //Funcion flecha que concatena aniosLista con semanasLista

class PrecioDelActivo { //Clase constructora para la BD de precios
    constructor(anioSemana, precioBTC, precioETH, precioADA) {
        this.anioSemana = anioSemana
        this.precioBTC = precioBTC
        this.precioETH = precioETH
        this.precioADA = precioADA
    }
}

const preciosCrypto =[] //Array de objetos que tendra la data de fechas y precios de las criptos

const inversionUsuario = { //Objeto con la data de la inversion que desea calcular el usuario
    fechaInicio: '',
    fechaFin: '',
    montoUSD: '',
    periodoTiempo: '',
    criptoOpcion: ''
}

//Llenamos el arreglo preciosCrypto con objetos de AnioSemana, PrecioBTC, PrecioETH, PrecioADA y cualquiera que se quiera agregar en el futuro
for(const elemento in listaAnioSemana) {
    preciosCrypto.push(new PrecioDelActivo(listaAnioSemana[elemento],preciosListaBTC[elemento],preciosListaETH[elemento],preciosListaADA[elemento]))
}

//Funcion para buscar el precio de una fecha en especifico dentro del arreglo preciosCrypto
const buscarPrecio = (anioSemana) => {
    const precioFecha = preciosCrypto.find(precio => precio.anioSemana === anioSemana)

    if(!precioFecha){
        throw new Error(`No existe la dupla de anio-semana ${anioSemana}`)
    }

    return precioFecha
}

//Definicion de los elementos del formulario
const inputFormFechaInicio = document.getElementById('formFechaInicio')
const inputFormFechaFin = document.getElementById('formFechaFin')
const inputFormMontoUSD = document.getElementById('formMontoUSD')
const inputFormPeriodo = document.getElementById('formPeriodo')
const inputFormCripto = document.getElementById('formCripto')
const inputFormCalcular = document.getElementById('formCalcularInversion')
const inputFormReiniciar = document.getElementById('formReiniciarFormulario')
const outputFormROI = document.getElementById('formOutputROI')
const outputFormDCA = document.getElementById('formOutputDCA')
const outputFormCripto = document.getElementById('formOutputCripto')
const outputFormUSD = document.getElementById('formOutputUSD')

//Definicion de funciones


//Funcion de validacion de datos en el formulario
function pedirDatos(){
    
    //Validacion basica de datos ingresados
    //Primero validamos la fecha inicio
    if (isNaN(inversionUsuario.fechaInicio) || (inversionUsuario.fechaInicio < new Date ("07/18/2010"))){ //Si la fecha parseada no es o mayor a 18 de julio de 2010, sale del ciclo y continua
        alert("Por favor ingrese una fecha inicio correcta con formato MM/DD/YY\n\nNota: \nPara BTC > 07/18/2010.\nPara ETH > 03/16/2016.\nPara ADA > 12/31/2017.")
        throw new Error(`Fecha ingresada ${inversionUsuario.fechaInicio} no es correcta.`)
    }
    
    //Segundo validamos la fecha fin
          
    if (isNaN(inversionUsuario.fechaFin) || (inversionUsuario.fechaFin < new Date ("07/18/2010"))){ //Si la fecha parseada no es NaN, sale del ciclo
        alert("Por favor ingrese una fecha fin correcta con formato MM/DD/YY\n\nNota: \nPara BTC > 07/18/2010.\nPara ETH > 03/16/2016.\nPara ADA > 12/31/2017.");
        throw new Error(`Fecha ingresada ${inversionUsuario.fechaFin} no es correcta.`)
    }
    
    
    //Tercero validamos monto sea un numero positivo
        
    if (isNaN(inversionUsuario.montoUSD) || inversionUsuario.montoUSD <=0){
        alert("Por favor ingrese un monto en dolares real")
        throw new Error(`Monto ingresado ${inversionUsuario.montoUSD} no es correcto.`)
    }
        
    //Cuarto validamos que periodo de tiempo este dentro de las opciones
    
    if ((inversionUsuario.periodoTiempo==="Semanal") || (inversionUsuario.periodoTiempo==="Bi-Semanal") || (inversionUsuario.periodoTiempo==="Mensual") || (inversionUsuario.periodoTiempo==="Lump Sum") ) {
    
    } else {
        alert("Por favor seleccione un periodo de tiempo");
        throw new Error(`El periodo de tiempo ingresado ${inversionUsuario.periodoTiempo} no es correcto.`)
    }
   
    //Quinto, validamos que la criptomoneda este dentro de las opciones
    
    if ((inversionUsuario.criptoOpcion==="BTC") || (inversionUsuario.criptoOpcion==="ETH") || (inversionUsuario.criptoOpcion==="ADA")){
    
    } else {
        alert("Por favor seleccione una criptomoneda");
        throw new Error(`La inversion seleccionada ${inversionUsuario.criptoOpcion} no es correcta.`)
    }
    
}
    
//Funcion que nos ayuda a calcular la semana especifica de una fecha
function calcularSemana(fecha){
    let oneJan = new Date(fecha.getFullYear(),0,1)
    let numberOfDays = Math.floor((fecha-oneJan) /(24*60*60*1000))
    let result = Math.ceil((fecha.getDay()+1+numberOfDays)/7)
    if (result===53){
        result=52
    }
    return result
}

//Funcion que retorna el precio de BTC en una fecha en especifico
function consultaPrecioActivo(fecha, activo){
    let anio = fecha.getFullYear()
    let semana = calcularSemana(fecha)

    let duplaAnioSemana = anio + "" + semana
    
    console.log(duplaAnioSemana)

    if(activo=="BTC") {
        if(fecha< new Date("07/18/2010")) { //Validamos si la fecha ingresada es anterior a la de disponibilidad de datos, sino lanzamos un error y cortamos la ejecucion 
            alert(`No existe data historica de BTC antes de la fecha ${fecha}.`)
            throw new Error(`No existe data historica de BTC antes de la fecha ${fecha}.`)
        }else{
            return buscarPrecio(duplaAnioSemana).precioBTC            
        }
    }else if(activo=="ETH") {
        if(fecha< new Date("03/16/2016")) { //Same con ETH
            alert(`No existe data historica de ETH antes de la fecha ${fecha}.`)
            throw new Error(`No existe data historica de ETH antes de la fecha ${fecha}.`)
        }else{
            return buscarPrecio(duplaAnioSemana).precioETH
        }
    }else if(activo=="ADA"){
        if(fecha< new Date("12/31/2017")) { //Same con ADA
            alert(`No existe data historica de ADA antes de la fecha ${fecha}.`)
            throw new Error(`No existe data historica de ADA antes de la fecha ${fecha}.`)
        }else{
            return buscarPrecio(duplaAnioSemana).precioADA
        }
    }else{
        throw new Error(`No existe el activo ${activo}.`)
    }
}

//Esta funcion va a calcular el DCA hasta hoy segun el monto de inversion, periodo de tiempo y fecha de inicio
function calcularInversion(fechainicial, fechafinal, monto, periodo, activo){
    let fechaActual=new Date(fechainicial)
    let valorDCACripto=0
    let valorDCAUSD=0
    let outputDCAHoy=0

    switch(periodo){
        case "Semanal": //Si el DCA es semanal
            while(fechaActual<fechafinal){ //Mientras la fecha de recorrida sea menor a la fecha de hoy, sigue recorriendo los arrays
                
                valorDCACripto=valorDCACripto+(parseFloat(monto)/consultaPrecioActivo(fechaActual,activo)) //Suma el valor de BTC para calcularlo en el DCA
                valorDCAUSD=valorDCAUSD+parseFloat(monto) //Suma el valor de USD para calcularlo en el DCA
                                
                fechaActual.setDate(fechaActual.getDate()+7) //Le agregamos 7 dias a la fecha
                
                if(fechaActual>=fechafinal){ //Si en algun momento la fecha de recorrida supera o es igual a la fecha actual, salir del bucle
                    break
                }
            }
            break;
        case "Bi-Semanal": //Si el DCA es bi semanal
            while(fechaActual<fechafinal){ //Mientras la fecha de recorrida sea menor a la fecha de hoy, sigue recorriendo los arrays
                
                valorDCACripto=valorDCACripto+(parseFloat(monto)/consultaPrecioActivo(fechaActual,activo)) //Suma el valor de BTC para calcularlo en el DCA
                valorDCAUSD=valorDCAUSD+parseFloat(monto) //Suma el valor de USD para calcularlo en el DCA
                            
                fechaActual.setDate(fechaActual.getDate()+14) //Le agregamos 14 dias a la fecha
            
                if(fechaActual>=fechafinal){ //Si en algun momento la fecha de recorrida supera o es igual a la fecha actual, salir del bucle
                    break
                }
            }
            break
        case "Mensual": //Si el DCA es mensual
            while(fechaActual<fechafinal){ //Mientras la fecha de recorrida sea menor a la fecha de hoy, sigue recorriendo los arrays
                    
                valorDCACripto=valorDCACripto+(parseFloat(monto)/consultaPrecioActivo(fechaActual,activo)) //Suma el valor de BTC para calcularlo en el DCA
                valorDCAUSD=valorDCAUSD+parseFloat(monto) //Suma el valor de USD para calcularlo en el DCA
                            
                fechaActual.setDate(fechaActual.getDate()+30) //Le agregamos 14 dias a la fecha
            
                if(fechaActual>=fechafinal){ //Si en algun momento la fecha de recorrida supera o es igual a la fecha actual, salir del bucle
                    break
                }
            
            }
            break
        case "Lump Sum": //Si el DCA es lumpsum
            alert("Lumpsum todavia en desarrollo")
            break
        }
        
    //Para calcular el valor DCA, veamos el ultimo precio registrado del activo
    switch(activo){
        case "BTC": //Si el activo es BTC, 
            outputDCAHoy=valorDCACripto*preciosListaBTC[preciosListaBTC.length-1]
            break;
        case "ETH": //Si el activo es ETH
            outputDCAHoy=valorDCACripto*preciosListaETH[preciosListaETH.length-1];
            break;
        case "ADA": //Si el activo es ADA
            outputDCAHoy=valorDCACripto*preciosListaADA[preciosListaADA.length-1];
            break;
        default:
            throw new Error(`No existe el activo ${activo}`)
            break;
    }
    
    //Mostrar resultados
    mostrarResultados(fechainicial, fechafinal, monto, periodo, activo, valorDCAUSD, valorDCACripto, outputDCAHoy)
}

//Esta funcion mostrara los resultados, en principio en la consola pero eventualmente para el HTML
function mostrarResultados(fechaInicio, fechaFin, montoUSD, periodoTiempo, criptoOpcion, outputUSD, outputCriptoDCA, outputDCAHoy){
    let ROI = (outputDCAHoy/outputUSD) * 100

    outputFormROI.innerHTML = `${ROI.toFixed(2)} %`
    outputFormDCA.innerHTML = `${outputDCAHoy.toFixed(2)} $`
    outputFormCripto.innerHTML = `${outputCriptoDCA.toFixed(2)} ${criptoOpcion}`
    outputFormUSD.innerHTML = `${outputUSD.toFixed(2)} $`
   
}

//Al hacer click en Calcular inversion
inputFormCalcular.onclick = () => {
    inversionUsuario.fechaInicio=new Date(inputFormFechaInicio.value)
    inversionUsuario.fechaFin=new Date(inputFormFechaFin.value)
    inversionUsuario.montoUSD=inputFormMontoUSD.value
    inversionUsuario.periodoTiempo=inputFormPeriodo.value
    inversionUsuario.criptoOpcion=inputFormCripto.value

    pedirDatos() //Para validar que los datos estan en el formulario y son correctos

    calcularInversion(inversionUsuario.fechaInicio,inversionUsuario.fechaFin,inversionUsuario.montoUSD,inversionUsuario.periodoTiempo,inversionUsuario.criptoOpcion)
}

//Limpiar formulario
inputFormReiniciar.onclick = () => {
    inputFormFechaInicio.value=""
    inputFormFechaFin.value=""
    inputFormMontoUSD.value=""
    inputFormPeriodo.value=inputFormPeriodo.firstElementChild.value
    inputFormCripto.value=inputFormCripto.firstElementChild.value
}