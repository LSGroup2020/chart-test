<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="google-site-verification" content="XHQnnUY_Uo_k62PYO5d0XJj0iNx0wwhi0bUU1BP4RSo">
    <meta name="naver-site-verification" content="d95043e706cad7d5bef77f5ac12ba10a342cc98a">
    <meta name="description" content="국립농업과학원 농업인건강안전정보센터. 건강안전교육, 예방관리, 농업안전보건 연구 및 통계정보 제공">
    <link rel="shortcut icon" href="farmer.ico">
    <link rel="icon" href="farmer.ico">
    <meta name="WT.ti" content="농업인안전365 &gt; 메인페이지">
    <title>국립농업과학원 농업안전보건 중앙 DB센터</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
          integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
    <link type="text/css" rel="stylesheet" href="/pubWeb/css/reset.css">
    <link type="text/css" rel="stylesheet" href="/pubWeb/css/default.css">
    <link type="text/css" rel="stylesheet" href="/pubWeb/css/layout.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.6.0/Chart.js"></script>
</head>

<body>

<div id="wrapper">
    <!-- start: header -->
    <div id="header1">
        <div class="head">
            <h1><a href="/portal/intro/index.do"><img src="/pubWeb/img/logo_img.png" alt="국립농업과학원 농업인건강안전정보센터"></a></h1>
            <!-- start: search bar -->
            <!--<div class="search_bar_area">
                <div class="search_bar">
                    <input type="text" placeholder="농기계"/>
                    <a href="#"><div class="search_title">검색</div></a>
                    <div id="recommend" class="invisible">
                        <a href="#"><div class="item"><span class="text"></span> 사용여부별 농업인 수, 업무상 손상자 수, 업무상 손상 발생률</div></a>
                        <a href="#"><div class="item">음주 후 <span class="text"></span> 운행 빈도별 농업인 수</div></a>
                        <a href="#"><div class="item">일몰 후 <span class="text"></span> 운행 빈도별 농업인 수</div></a>
                    </div>
                </div>
            </div>-->
            <!-- end: search bar -->
            <a href="https://farmer.rda.go.kr:443/fds/pro/log_i.do" class="btnPro">전문가 로그인</a>
        </div>
    </div>
    <!-- end: header -->

    <div id="container">
        <div class="content">

            <!-- start: left menu -->
            <div class="left">
                <div class="bt">
                    <a href="/fds/intro/index.do"><img src="/pubWeb/img/bt_dbhome.png" alt="DB센터홈"></a>
                </div>
                <div class="left_menu_list_area">
                    <div class="left_menu_title">업무상 손상 조사 결과</div>
                    <nav class="my-menu">
                        <ul class="my-nav">
                            <li><a href="#" class="nav_title">업무상 손상 현황</a>
                                <ul>
                                    <li><a href="#">농기계 사용여부별</a></li>
                                    <li><a href="#">농약 사용여부별</a></li>
                                    <li><a href="#">농업 종사기간별</a></li>
                                    <li><a href="#">도별</a></li>
                                    <li><a href="#">성별</a></li>
                                    <li><a href="#">소득수준별</a></li>
                                    <li><a href="#">신체제한 수준별</a></li>
                                    <li><a href="#">연령별</a></li>
                                    <li><a href="#">주요 농업종류별</a></li>
                                    <li><a href="#">지난 1년간 농업활동 기간별</a></li>
                                </ul>
                            </li>
                            <li><a href="#" class="nav_title">위험요인 노출 수준</a>
                                <ul>
                                    <li><a href="#">농약 사용 방법별</a></li>
                                    <li><a href="#">음주 후 농기계 운행 빈도별</a></li>
                                    <li><a href="#">음주 후 농작업 빈도별</a></li>
                                    <li><a href="#">전도 경험별</a></li>
                                    <li><a href="#">농약 보호장구별/착용 수준별</a></li>
                                    <li><a href="#">농약 중독 예방 종류별/노력 수준별</a></li>
                                    <li><a href="#">일몰 후 농기계 운행 빈도별</a></li>
                                    <li><a href="#">일몰 후 농작업 빈도별</a></li>
                                    <li><a href="#">경사진 곳에서 사다리 이용 수준별</a></li>
                                    <li><a href="#">작목별 사다리 이용 수준별</a></li>
                                    <li><a href="#">전도 예방 조치 여부별</a></li>
                                </ul>
                            </li>
                            <li><a href="#" class="nav_title">업무상 손상 특성</a>
                                <ul>
                                    <li><a href="#">농기계별</a></li>
                                    <li><a href="#">농기구별</a></li>
                                    <li><a href="#">농업활동 피해종류별</a></li>
                                    <li><a href="#">발생 상황별</a></li>
                                    <li><a href="#">발생 시간별</a></li>
                                    <li><a href="#">발생 월별</a></li>
                                    <li><a href="#">발생 장소별</a></li>
                                    <li><a href="#">발생 형태별</a></li>
                                    <li><a href="#">발생시 날씨별</a></li>
                                    <li><a href="#">손상 부위별</a></li>
                                    <li><a href="#">손상 종류별</a></li>
                                    <li><a href="#">손상 후 농업활동 수행 능력별</a></li>
                                    <li><a href="#">치료 일수별</a></li>
                                    <li><a href="#">치료 종류별</a></li>
                                    <li><a href="#">휴업 일수별</a></li>
                                    <li><a href="#">농기계 관련 여부별</a></li>
                                    <li><a href="#">농기구 관련 여부별</a></li>
                                    <li><a href="#">치료 여부별</a></li>
                                    <li><a href="#">치료 지원 보험 종류별</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <!-- end: left menu -->

            <!-- start: right contents -->
            <div class="right">
                <!-- start: search bar -->
                <div class="search_bar_area">
                    <div class="search_bar">
                        <input type="text" placeholder="농기계"/>
                        <a href="#"><div class="search_title">검색</div></a>
                        <div id="recommend" class="invisible">
                            <a href="#"><div class="item"><span class="text"></span> 사용여부별 농업인 수, 업무상 손상자 수, 업무상 손상 발생률</div></a>
                            <a href="#"><div class="item">음주 후 <span class="text"></span> 운행 빈도별 농업인 수</div></a>
                            <a href="#"><div class="item">일몰 후 <span class="text"></span> 운행 빈도별 농업인 수</div></a>
                        </div>
                    </div>
                </div>
                <!-- end: search bar -->

                <div class="location">
                    <ul>
                        <a href="#"><li class="first"><img alt="home" src="/pubWeb/img/ic_home1.gif">&nbsp;&nbsp;HOME</li></a>
                        <a href="#"><li>업무상 손상 조사 결과</li></a>
                        <a href="#"><li>업무상 손상 현황</li></a>
                        <a href="#"><li class="last">농기계 사용여부 별</li></a>
                    </ul>
                </div>
                <div class="con_box" id="chartType">
                    <h4>농기계 사용여부별 농업인 수, 업무상 손상자 수, 업무상 손상 발생률</h4>
                    <div class="search">

                        <!--<label class="tit">연도별</label>-->
                        <ul class="option_check_area">
                            <li>
                                <input id="year_check_1" class="checkbox" type="checkbox" name="year_check" checked="checked" value="2013" onclick="fnClickYear();">
                                <label for="year_check_1">2013</label>
                            </li>
                            <li>
                                <input id="year_check_2" class="checkbox" type="checkbox" name="year_check" checked="checked" value="2015" onclick="fnClickYear();">
                                <label for="year_check_2">2015</label>
                            </li>
                            <li>
                                <input id="year_check_3" class="checkbox" type="checkbox" name="year_check" checked="checked" value="2017" onclick="fnClickYear();">
                                <label for="year_check_3">2017</label>
                            </li>
                            <li>
                                <input id="year_check_4" class="checkbox" type="checkbox" name="year_check" checked="checked" value="2019" onclick="fnClickYear();">
                                <label for="year_check_4">2019</label>
                            </li>
                        </ul>
                        <!--<select id="year_first">
                            <option value="line">2013</option>
                            <option value="bar">2015</option>
                            <option value="radar">2017</option>
                            <option value="polarArea">2019</option>
                        </select>
                        <span class="select_div">~</span>
                        <select id="year_last">
                            <option value="line">2019</option>
                            <option value="bar">2017</option>
                            <option value="radar">2015</option>
                            <option value="polarArea">2013</option>
                        </select>
<a href="javascript:getJsonData();" class="scBt"><img src="img/btn_search.gif" alt="검색"></a>-->
                        <a href="javascript:content_print();"><img src="/pubWeb/img/btn_printPV.gif" alt="인쇄미리보기"></a>
                        <a href="javascript:getExcelDown();"><img src="/pubWeb/img/btn_download1l.gif" alt="다운로드"></a>

                        <ul class="option_check_area">
                            <li>
                                <input id="check_1" class="checkbox" type="checkbox" name="" checked="checked" onclick='gethumanValue(event)'>
                                <label for="check_1">농업인수</label>
                            </li>
                            <li>
                                <input id="check_2" class="checkbox" type="checkbox" name="" checked="checked" onclick='getworkValue(event)'>
                                <label for="check_2">업무상 손상자 수</label>
                            </li>
                            <li>
                                <input id="check_3" class="checkbox" type="checkbox" name="" checked="checked" onclick='getpercentageValue(event)'>
                                <label for="check_3">업무상 손상 발생률</label>
                            </li>
                            <li>
                                <input id="check_4" class="checkbox" type="checkbox" name="" checked="checked" onclick='getallValue(event)'>
                                <label for="check_4">총계</label>
                            </li>
                            <li>
                                <input id="check_5" class="checkbox" type="checkbox" name="" checked="checked" onclick='getuseValue(event)'>
                                <label for="check_5">사용함</label>
                            </li>
                            <li>
                                <input id="check_6" class="checkbox" type="checkbox" name="" checked="checked" onclick='getnotValue(event)'>
                                <label for="check_6">사용 안함</label>
                            </li>
                        </ul>

                    </div>

                    <h5>그래프</h5>

                    <!--<button id="toggle">show/hide all</button>-->

                    <div class="graph">
                        <div class="graph_btn_area">
                            <button id="line">Line Chart</button>
                            <button id="rader">Rader Chart</button>
                            <button id="polarArea">PolarArea Chart</button>
                            <button id="bubble">Bubble Chart</button>
                            <button id="doughnut">Doughnut Chart</button>
                            <button id="pie">Pie Chart</button>
                            <button id="bar">Bar Chart</button>
                        </div>
                        <div class="myChartDiv">
                            <canvas id="myChart" width="400" height="200"></canvas>
                        </div>
                    </div>

                    <h5>리스트</h5>
                    <form style="display:none;" method="post" name="excel">
                        <input type="text" name="year">
                    </form>
                    <div class="table_area">
                        <table class="tg">
                            <thead>
                            <tr>
                                <th class="tg-xiy8" rowspan="2">농기계 사용여부별</th>
                                <th class="tg-dn6y" colspan="3">2013</th>
                                <th class="tg-dn6y" colspan="3">2015</th>
                                <th class="tg-dn6y" colspan="3">2017</th>
                                <th class="tg-dn6y" colspan="3">2019</th>
                            </tr>
                            <tr>
                                <td class="tg-yi6i">농업인수(명)</td>
                                <td class="tg-yi6i">업무상 손상자 수(명)</td>
                                <td class="tg-yi6i">업무상 손상 발생률(%)</td>
                                <td class="tg-yi6i">농업인수(명)</td>
                                <td class="tg-yi6i">업무상 손상자 수(명)<br></td>
                                <td class="tg-yi6i">업무상 손상 발생률(%)<br></td>
                                <td class="tg-yi6i">농업인수(명)<br></td>
                                <td class="tg-yi6i">업무상 손상 발생률(%)<br></td>
                                <td class="tg-yi6i">업무상 손상 발생률(%)</td>
                                <td class="tg-yi6i">농업인수(명)</td>
                                <td class="tg-yi6i">업무상 손상 발생률(%)</td>
                                <td class="tg-yi6i">업무상 손상 발생률(%)</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td class="tg-ibd0">총계</td>
                                <td class="tg-9wq8"><span style="font-weight:400;font-style:normal">2,127,872</span></td>
                                <td class="tg-9wq8"><span style="font-weight:400;font-style:normal">64,735</span></td>
                                <td class="tg-9wq8">3.0</td>
                                <td class="tg-9wq8"><span style="font-weight:400;font-style:normal">2,070,009</span></td>
                                <td class="tg-9wq8"><span style="font-weight:400;font-style:normal">38,429</span></td>
                                <td class="tg-9wq8">1.9</td>
                                <td class="tg-9wq8"><span style="font-weight:400;font-style:normal">1,913,050</span></td>
                                <td class="tg-9wq8"><span style="font-weight:400;font-style:normal">41,678</span></td>
                                <td class="tg-9wq8">2.2</td>
                                <td class="tg-9wq8"><span style="font-weight:400;font-style:normal">1,811,824</span></td>
                                <td class="tg-9wq8"><span style="font-weight:400;font-style:normal">48,405</span></td>
                                <td class="tg-9wq8">2.7</td>
                            </tr>
                            <tr>
                                <td class="tg-ibd0">사용함</td>
                                <td class="tg-9wq8"><span style="font-weight:400;font-style:normal">1,113,872</span></td>
                                <td class="tg-9wq8"><span style="font-weight:400;font-style:normal">43,441</span></td>
                                <td class="tg-9wq8">3.9</td>
                                <td class="tg-9wq8"><span style="font-weight:400;font-style:normal">1,107,801</span></td>
                                <td class="tg-9wq8"><span style="font-weight:400;font-style:normal">27,130</span></td>
                                <td class="tg-9wq8">2.4</td>
                                <td class="tg-9wq8"><span style="font-weight:400;font-style:normal">1,131,431</span></td>
                                <td class="tg-9wq8"><span style="font-weight:400;font-style:normal">33,699</span></td>
                                <td class="tg-9wq8">3.0</td>
                                <td class="tg-9wq8"><span style="font-weight:400;font-style:normal">882,878</span></td>
                                <td class="tg-9wq8"><span style="font-weight:400;font-style:normal">27,909</span></td>
                                <td class="tg-9wq8">3.2</td>
                            </tr>
                            <tr>
                                <td class="tg-ibd0">사용 안함</td>
                                <td class="tg-9wq8"><span style="font-weight:400;font-style:normal">1,014,000</span></td>
                                <td class="tg-9wq8"><span style="font-weight:400;font-style:normal">21,294</span></td>
                                <td class="tg-9wq8">2.1</td>
                                <td class="tg-9wq8"><span style="font-weight:400;font-style:normal">962,208</span></td>
                                <td class="tg-9wq8"><span style="font-weight:400;font-style:normal">11,299</span></td>
                                <td class="tg-9wq8">1.2</td>
                                <td class="tg-9wq8"><span style="font-weight:400;font-style:normal">781,618</span></td>
                                <td class="tg-9wq8"><span style="font-weight:400;font-style:normal">7,979</span></td>
                                <td class="tg-9wq8">1.0</td>
                                <td class="tg-9wq8"><span style="font-weight:400;font-style:normal">928,947</span></td>
                                <td class="tg-9wq8"><span style="font-weight:400;font-style:normal">20,496</span></td>
                                <td class="tg-9wq8">2.2</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- //table -->
                </div>
            </div>
            <!-- end: right contents -->
        </div>
    </div>

    <div class="test_area">
        <div class="test_can">
            <canvas id="myChart_1"></canvas>
        </div>
        <div class="test_can">
            <canvas id="myChart_2"></canvas>
        </div>
    </div>

</div>

<script src="/pubWeb/js/jquery-2.1.4.min.js"></script>
<script type="text/javascript" src="/pubWeb/js/mgaccordion.js"></script>
<script type="text/javascript" src="/pubWeb/js/search_script.js"></script>
<script type="text/javascript" src="/pubWeb/js/chart_script.js"></script>
<script>
    $(document).ready(function () {
        $('.my-nav').mgaccordion();
    });


</script>

</body>

</html>
