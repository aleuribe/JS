//Version 1.0 de la Calculadora de Costo Promedio en Dolares para Cripto Inversiones

//Definicion de variables
let fechaInicio,fechaFin,montoUSD,periodoTiempo,criptoOpcion;
let outputROI, outputDCAHoy, outputCriptoDCA, outputUSD;

//Data cruda de los precios, semanas y anios en 3 arreglos
const aniosListaBTC = [2010  , 2010  , 2010  , 2010  , 2010  , 2010  , 2010  , 2010  , 2010  , 2010  , 2010  , 2010  , 2010  , 2010  , 2010  , 2010  , 2010  , 2010  , 2010  , 2010  , 2010  , 2010  , 2010  , 2010  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2011  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2012  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2013  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2014  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2015  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2016  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2017  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2018  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2019  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2020  , 2021  , 2021  , 2021  , 2021  , 2021  , 2021  , 2021  , 2021  , 2021];
const semanasListaBTC = [30	, 31	, 32	, 33	, 34	, 35	, 36	, 37	, 38	, 39	, 40	, 41	, 42	, 43	, 44	, 45	, 46	, 47	, 48	, 49	, 50	, 51	, 52	, 53	, 2	, 3	, 4	, 5	, 6	, 7	, 8	, 9	, 10	, 11	, 12	, 13	, 14	, 15	, 16	, 17	, 18	, 19	, 20	, 21	, 22	, 23	, 24	, 25	, 26	, 27	, 28	, 29	, 30	, 31	, 32	, 33	, 34	, 35	, 36	, 37	, 38	, 39	, 40	, 41	, 42	, 43	, 44	, 45	, 46	, 47	, 48	, 49	, 50	, 51	, 52	, 53	, 1	, 2	, 3	, 4	, 5	, 6	, 7	, 8	, 9	, 10	, 11	, 12	, 13	, 14	, 15	, 16	, 17	, 18	, 19	, 20	, 21	, 22	, 23	, 24	, 25	, 26	, 27	, 28	, 29	, 30	, 31	, 32	, 33	, 34	, 35	, 36	, 37	, 38	, 39	, 40	, 41	, 42	, 43	, 44	, 45	, 46	, 47	, 48	, 49	, 50	, 51	, 52	, 53	, 2	, 3	, 4	, 5	, 6	, 7	, 8	, 9	, 10	, 11	, 12	, 13	, 14	, 15	, 16	, 17	, 18	, 19	, 20	, 21	, 22	, 23	, 24	, 25	, 26	, 27	, 28	, 29	, 30	, 31	, 32	, 33	, 34	, 35	, 36	, 37	, 38	, 39	, 40	, 41	, 42	, 43	, 44	, 45	, 46	, 47	, 48	, 49	, 50	, 51	, 52	, 53	, 2	, 3	, 4	, 5	, 6	, 7	, 8	, 9	, 10	, 11	, 12	, 13	, 14	, 15	, 16	, 17	, 18	, 19	, 20	, 21	, 22	, 23	, 24	, 25	, 26	, 27	, 28	, 29	, 30	, 31	, 32	, 33	, 34	, 35	, 36	, 37	, 38	, 39	, 40	, 41	, 42	, 43	, 44	, 45	, 46	, 47	, 48	, 49	, 50	, 51	, 52	, 53	, 2	, 3	, 4	, 5	, 6	, 7	, 8	, 9	, 10	, 11	, 12	, 13	, 14	, 15	, 16	, 17	, 18	, 19	, 20	, 21	, 22	, 23	, 24	, 25	, 26	, 27	, 28	, 29	, 30	, 31	, 32	, 33	, 34	, 35	, 36	, 37	, 38	, 39	, 40	, 41	, 42	, 43	, 44	, 45	, 46	, 47	, 48	, 49	, 50	, 51	, 52	, 53	, 2	, 3	, 4	, 5	, 6	, 7	, 8	, 9	, 10	, 11	, 12	, 13	, 14	, 15	, 16	, 17	, 18	, 19	, 20	, 21	, 22	, 23	, 24	, 25	, 26	, 27	, 28	, 29	, 30	, 31	, 32	, 33	, 34	, 35	, 36	, 37	, 38	, 39	, 40	, 41	, 42	, 43	, 44	, 45	, 46	, 47	, 48	, 49	, 50	, 51	, 52	, 53	, 1	, 2	, 3	, 4	, 5	, 6	, 7	, 8	, 9	, 10	, 11	, 12	, 13	, 14	, 15	, 16	, 17	, 18	, 19	, 20	, 21	, 22	, 23	, 24	, 25	, 26	, 27	, 28	, 29	, 30	, 31	, 32	, 33	, 34	, 35	, 36	, 37	, 38	, 39	, 40	, 41	, 42	, 43	, 44	, 45	, 46	, 47	, 48	, 49	, 50	, 51	, 52	, 53	, 2	, 3	, 4	, 5	, 6	, 7	, 8	, 9	, 10	, 11	, 12	, 13	, 14	, 15	, 16	, 17	, 18	, 19	, 20	, 21	, 22	, 23	, 24	, 25	, 26	, 27	, 28	, 29	, 30	, 31	, 32	, 33	, 34	, 35	, 36	, 37	, 38	, 39	, 40	, 41	, 42	, 43	, 44	, 45	, 46	, 47	, 48	, 49	, 50	, 51	, 52	, 53	, 2	, 3	, 4	, 5	, 6	, 7	, 8	, 9	, 10	, 11	, 12	, 13	, 14	, 15	, 16	, 17	, 18	, 19	, 20	, 21	, 22	, 23	, 24	, 25	, 26	, 27	, 28	, 29	, 30	, 31	, 32	, 33	, 34	, 35	, 36	, 37	, 38	, 39	, 40	, 41	, 42	, 43	, 44	, 45	, 46	, 47	, 48	, 49	, 50	, 51	, 52	, 53	, 2	, 3	, 4	, 5	, 6	, 7	, 8	, 9	, 10	, 11	, 12	, 13	, 14	, 15	, 16	, 17	, 18	, 19	, 20	, 21	, 22	, 23	, 24	, 25	, 26	, 27	, 28	, 29	, 30	, 31	, 32	, 33	, 34	, 35	, 36	, 37	, 38	, 39	, 40	, 41	, 42	, 43	, 44	, 45	, 46	, 47	, 48	, 49	, 50	, 51	, 52	, 53	, 2	, 3	, 4	, 5	, 6	, 7	, 8	, 9	, 10];
const preciosListaBTC = [0.1	, 0.1	, 0.1	, 0.1	, 0.1	, 0.1	, 0.1	, 0.1	, 0.1	, 0.1	, 0.1	, 0.1	, 0.1	, 0.1	, 0.2	, 0.4	, 0.3	, 0.3	, 0.3	, 0.2	, 0.2	, 0.2	, 0.2	, 0.3	, 0.3	, 0.4	, 0.4	, 0.4	, 0.9	, 1.1	, 0.9	, 1	, 0.9	, 0.9	, 0.8	, 0.9	, 0.8	, 0.7	, 1	, 1.7	, 3.5	, 3.6	, 7.2	, 6.1	, 8.3	, 18.9	, 14.6	, 16.9	, 17.5	, 15.4	, 14.4	, 13.7	, 13.7	, 13.5	, 6.6	, 10.1	, 11.4	, 8.6	, 8.5	, 4.8	, 4.8	, 5.5	, 5	, 4	, 3.8	, 3.2	, 3.6	, 3	, 3	, 2.2	, 2.5	, 2.8	, 3	, 3.2	, 3.9	, 4.7	, 6.8	, 6.8	, 6.2	, 5.6	, 5.9	, 5.6	, 4.2	, 4.8	, 4.6	, 4.8	, 5.2	, 4.7	, 4.9	, 4.7	, 5	, 5.3	, 5	, 5.1	, 4.9	, 5.1	, 5.1	, 5.3	, 5.6	, 6.4	, 6.4	, 6.7	, 6.8	, 7.5	, 8.9	, 8.9	, 11	, 11.5	, 11.6	, 10.5	, 10	, 11	, 11.8	, 12.2	, 12.4	, 12.5	, 11.9	, 11.7	, 10.3	, 10.6	, 10.9	, 11.8	, 12.4	, 12.6	, 13.4	, 13.5	, 13.4	, 13.4	, 13.4	, 14.2	, 15.6	, 17.9	, 19.6	, 23.6	, 27.2	, 29.8	, 34.3	, 46.8	, 47	, 64.3	, 92.2	, 142.6	, 93	, 126.6	, 128	, 112.9	, 115.6	, 123.2	, 132	, 129.3	, 107.9	, 99.8	, 108.2	, 95	, 69.7	, 98.3	, 89.8	, 94.4	, 104.9	, 103	, 112.8	, 119.6	, 141	, 129	, 136.7	, 134.4	, 142.5	, 136.7	, 142.9	, 183.1	, 188.6	, 211.7	, 367.8	, 462	, 832.5	, 1205.7	, 697	, 908.9	, 640.5	, 762	, 924.7	, 1005.3	, 905.7	, 961	, 940.4	, 648.8	, 371.1	, 255.6	, 557.4	, 609.2	, 624	, 564.3	, 477.1	, 456.6	, 437.6	, 506	, 457.9	, 438.6	, 451.9	, 452.8	, 520.5	, 627.9	, 651.7	, 583.4	, 597	, 597.6	, 623	, 635.9	, 627	, 596	, 591.7	, 589.5	, 522	, 497.7	, 506	, 484.5	, 478.2	, 411.5	, 399	, 335.3	, 361.2	, 390.9	, 346.7	, 325.4	, 343.5	, 374.9	, 352	, 376.3	, 376.3	, 348.2	, 330.4	, 315.3	, 287.1	, 273.4	, 199.6	, 248.2	, 218.5	, 227.7	, 258.6	, 244.4	, 254.1	, 274.9	, 281.6	, 259.7	, 252	, 252.9	, 236.5	, 223.4	, 226.1	, 235.3	, 241.4	, 236.2	, 238.9	, 233.2	, 224.7	, 232.5	, 245	, 250.7	, 260.5	, 292	, 274	, 288.7	, 280.5	, 258.6	, 260.5	, 229.5	, 228.5	, 233.7	, 235.6	, 231.1	, 234.3	, 238.6	, 245.4	, 269.6	, 282.6	, 311.2	, 385.1	, 331.8	, 324.7	, 355.8	, 386.7	, 432.3	, 461.2	, 415.4	, 433.7	, 448.3	, 385	, 388.6	, 377.8	, 376.7	, 390.1	, 440.1	, 431.3	, 399	, 410.4	, 408.7	, 416.5	, 418.5	, 418	, 430	, 450.1	, 448.5	, 458.5	, 456.4	, 443.6	, 524.2	, 572	, 591.6	, 753.8	, 663.5	, 698.1	, 651.8	, 660.7	, 655.2	, 654.7	, 586.5	, 584.6	, 582.6	, 570.3	, 598.8	, 624.5	, 607.1	, 602.6	, 613.4	, 617.7	, 637	, 655.5	, 715	, 702.1	, 704.3	, 747.9	, 734.1	, 764.2	, 774	, 787.2	, 891.1	, 963.4	, 888.9	, 819.6	, 919.8	, 918.5	, 1031.8	, 1008.3	, 1052.3	, 1149.1	, 1264.3	, 1179.2	, 971.4	, 966.3	, 1086.1	, 1180.8	, 1177	, 1240.9	, 1336.3	, 1545.3	, 1763.7	, 2040.2	, 2052.4	, 2545.4	, 2900.3	, 2655.1	, 2590.1	, 2424.6	, 2564.9	, 1975.1	, 2836.5	, 2733.5	, 3262.8	, 3871.6	, 4150.5	, 4352.3	, 4573.8	, 4335.1	, 3698.9	, 3788	, 4360.6	, 4435.8	, 5824.7	, 6006.6	, 5726.6	, 7363.8	, 6339.9	, 7780.9	, 8754.7	, 10912.7	, 14843.4	, 19345.5	, 14396.5	, 12531.5	, 17172.3	, 14292.2	, 12858.9	, 11467.5	, 9241.1	, 8559.6	, 11073.5	, 9704.3	, 11402.3	, 8762	, 7874.9	, 8547.4	, 6938.2	, 6905.7	, 8004.4	, 8923.1	, 9352.4	, 9853.5	, 8459.5	, 8245.1	, 7361.3	, 7646.6	, 7515.8	, 6505.8	, 6167.3	, 6398.9	, 6765.5	, 6254.8	, 7408.7	, 8234.1	, 7014.3	, 6231.6	, 6379.1	, 6734.8	, 7189.6	, 6184.3	, 6519	, 6729.6	, 6603.9	, 6596.3	, 6321.7	, 6572.2	, 6494.2	, 6386.2	, 6427.1	, 5621.8	, 3920.4	, 4196.2	, 3430.4	, 3228.7	, 3964.4	, 3706.8	, 3785.4	, 3597.2	, 3677.8	, 3570.9	, 3502.5	, 3661.4	, 3616.8	, 4120.4	, 3823.1	, 3944.3	, 4006.4	, 4002.5	, 4111.8	, 5046.2	, 5051.8	, 5290.2	, 5265.9	, 5830.9	, 7190.3	, 7262.6	, 8027.4	, 8545.7	, 7901.4	, 8812.5	, 10721.7	, 11906.5	, 11268	, 11364.9	, 10826.7	, 9492.1	, 10815.7	, 11314.5	, 10218.1	, 10131	, 9594.4	, 10461.1	, 10337.3	, 9993	, 8208.5	, 8127.3	, 8304.4	, 7957.3	, 9230.6	, 9300.6	, 8804.5	, 8497.3	, 7324.1	, 7546.6	, 7510.9	, 7080.8	, 7156.2	, 7321.5	, 7376.8	, 8024.1	, 8916.3	, 8341.6	, 9381.6	, 9895.5	, 9907.7	, 9655.7	, 8543.7	, 8887.8	, 5182.7	, 6186.2	, 6233.7	, 6857.4	, 6867.8	, 7230.8	, 7540.4	, 8966.3	, 9554.6	, 9379.5	, 9177	, 9692.5	, 9669.6	, 9471.3	, 9358.8	, 9008.3	, 9134.4	, 9233.3	, 9170.2	, 9704.1	, 11803.1	, 11764.3	, 11845.3	, 11661.3	, 11468.1	, 10092.2	, 10441.9	, 11081.8	, 10727.9	, 10544.2	, 11298.4	, 11362.1	, 13117.2	, 13797.3	, 14828.4	, 16071	, 18687.2	, 17730.7	, 19146.5	, 18808.9	, 23844	, 26454.4	, 32193.3	, 40151.9	, 36019.5	, 32088.9	, 34283.1	, 39256.6	, 47168.7	, 55923.7	, 46136.7	, 46470.9];


//Definicion de funciones
//Funcion de peticion de datos, que luego sera reemplazada por la data ingresada en el html
function pedirDatos(){
    
    //Validacion basica de datos ingresados
    //primero validamos la fecha inicio
    while(true){
        fechaInicio=new Date(prompt("Ingrese la fecha de inicio de la inversion con formato MM/DD/YYYY.\nNota: Para BTC la fecha debe ser superior a 18 de Julio de 2010."));
        console.log(fechaInicio);
        if (!isNaN(fechaInicio)){ //Si la fecha parseada no es NaN, sale del ciclo
            break;
        }else{
            alert("Por favor ingrese una fecha correcta con formato MM/DD/YYYY");
        }
    }

    //segundo validamos la fecha fin
    while(true){
        fechaFin=new Date(prompt("Ingrese la fecha de fin de la inversion con formato MM/DD/YYYY\nNota: Para BTC la fecha debe ser > 18 de Julio de 2010."));
        console.log(fechaFin);
        if (!isNaN(fechaFin)){ //Si la fecha parseada no es NaN, sale del ciclo
            break;
        }else{
            alert("Por favor ingrese una fecha correcta con formato MM/DD/YYYY");
        }
    }
    
    //tercero validamos monto sea un numero positivo
    while(true){
        montoUSD=prompt("Ingrese el monto en dolares de la inversion periodica");
        console.log(montoUSD);
        if (montoUSD>0){
            break;
        }else{
            alert("Por favor ingrese un monto en dolares real");
        }
        
    }
    
    //cuarto validamos que periodo de tiempo este dentro de las opciones
    let periodo=true;
    while(periodo){
        periodoTiempo=prompt("Ingrese el periodo de tiempo usado para la inversion. Opciones disponibles: Semanal, Bi Semanal, Semi Mensual, Mensual o Lump sum.\nOjo que por lo pronto solo calcula para Semanal.");
        console.log(periodoTiempo);
        switch(periodoTiempo){
            case "Semanal":
                periodo=false;
                break;
            case "Bi Semanal":
                periodo=false;
                break;
            case "Semi Mensual":
                periodo=false;
                break;
            case "Mensual":
                periodo=false;
                break;
            case "Lump sum":
                periodo=false;
                break;
            default:
                alert("Por favor ingrese una de la sopciones disponibles");
        }
        
    }
    
    //quinto, validamos que la criptomoneda este dentro de las opciones
    let opcion=true;
    while(opcion){
        criptoOpcion=prompt("Ingrese la cripto que quiere usar para invertir. Opciones: BTC, ETH, ADA.\nOjo que solo funciona con BTC.");
        console.log(criptoOpcion);
        switch(criptoOpcion){
            case "BTC":
                opcion=false;
                break;
            case "ETH":
                opcion=false;
                break;
            case "ADA":
                opcion=false;
                break;
        }

        }
    }
    
//Funcion que nos ayuda a calcular la semana especifica de una fecha
function calcularSemana(fecha){
    let oneJan = new Date(fecha.getFullYear(),0,1);
    let numberOfDays = Math.floor((fecha-oneJan) /(24*60*60*1000));
    return Math.ceil((fecha.getDay()+1+numberOfDays)/7);
} 


//Esta funcion realizara los calculos en funcion de la informacion ingresada
function calcularInversion(){
    if (criptoOpcion=="BTC"){
        DCABTC(fechaInicio,fechaFin,montoUSD,periodoTiempo);


    } else if(criptoOpcion=="ETH"){
        //Este codigo lo coloco despues
    } else if(criptoOpcion=="ADA"){
        //Este codigo lo coloco despues
    }

}

//Esta funcion va a consultar el precio de BTC dependiendo de la fecha
function consultaPrecioBTC(fecha){
    let anio = fecha.getFullYear()
    let semana = calcularSemana(fecha);

    //alert("semana " + semana);
    for(let i=0;i<=aniosListaBTC.length-1;i++){ //recorremos el de array anios para ver a partir de cual index esta
        if(aniosListaBTC[i]>=anio){ //si encontramos el anio, que empiece a buscar el Week usando ese mismo index haciendo w=i
            console.log("encontre el anio y esta en la posicion" + i);
            for(let w=i;w<semanasListaBTC.length-1;w++){ //a partir de ese momento, empezamos a buscar week (para tener la precision)
                if(semanasListaBTC[w]>=semana){
                    console.log("encontre la semana y es "+semanasListaBTC[w]);
                    //alert(preciosListaBTC.length);
                    return preciosListaBTC[w];
                    break;
                }
            }
            break;   
                  
        }
    }
}


//Esta funcion va a consultar el precio de ETH dependiendo de la fecha
function consultaPrecioETH(fecha){

}

//Esta funcion va a consultar el precio de ADA dependiendo de la fecha
function consultaPrecioADA(fecha){

}

//Esta funcion va a calcular el DCA hasta hoy segun el monto de inversion, periodo de tiempo y fecha de inicio
function DCABTC(fechainicial, fechafinal, monto, periodo){
    let fechaActual=new Date(fechainicial);
    let valorDCABTC=0;
    let valorDCAUSD=0;

    switch(periodo){
        case "Semanal": //Si el DCA es semanal
            while(fechaActual.getTime()<fechafinal.getTime()){ //Mientras la fecha de recorrida sea menor a la fecha de hoy, sigue recorriendo los arrays
                //console.log("fecha actual: " + fechaActual);
                valorDCABTC=valorDCABTC+(monto/consultaPrecioBTC(fechaActual)); //Suma el valor de BTC para calcularlo en el DCA
                valorDCAUSD=valorDCAUSD+parseFloat(monto); //Suma el valor de USD para calcularlo en el DCA
                //alert(valorDCAUSD);
                //console.log("Fecha actual "+fechaActual + "Valor btc acmumulado: " + valorDCABTC);    
                fechaActual.setDate(fechaActual.getDate()+7);
                //console.log("proxima fecha actual: "+fechaActual);
                if(fechaActual.getTime()>=fechafinal.getTime()){ //Si en algun momento la fecha de recorrida supera o es igual a la fecha actual, salir del bucle
                    //fechaActual=fechaHoy;
                    console.log("Se acabo la iteracion " + fechaActual);
                    break;
                }
            }   
            //Para poder exportar estos valores a la funcion que muestra resultados
            outputROI=0;
            outputDCAHoy=valorDCABTC*preciosListaBTC[preciosListaBTC.length-1];
            outputCriptoDCA=valorDCABTC;
            outputUSD=valorDCAUSD;
    }
}

//Esta funcion mostrara los resultados, en principio en la consola pero eventualmente para el HTML
function mostrarResultados(){
    alert("De haber invertido en " + criptoOpcion + " a partir de " + fechaInicio + " hasta " + fechaFin + " un monto de " + montoUSD + " de forma " + periodoTiempo + "\nUsted contaria con los siguientes montos:");

    alert("Total de USD invertidos: " + outputUSD);
    alert("Usted contaria a dia de hoy con " + outputCriptoDCA + " " + criptoOpcion);
    alert("Representando un monto en Dolares a dia de hoy de: " + outputDCAHoy + " dolares.");

}

//main
pedirDatos();
calcularInversion();
mostrarResultados();

console.log(preciosBTC);
//console.log(week(prueba.getFullYear(),prueba.getMonth()+1,prueba.getDate()));

//fechini=new Date("10/11/2019");
//fechfin=new Date("10/10/2020")
//DCABTC(100,"Semanal",fechini, fechfin);
//alert(week(2019,12,31));

// while(true){
//     var prueba = new Date(prompt("Ingrese fecha: "));
//     alert(calcularSemana(prueba));
// }
