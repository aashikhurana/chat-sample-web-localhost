webpackJsonp([10,63,64,65,66,67],{869:function(e,t,o){"use strict";function a(e,t,o){o=o||{};var a;return a="string"==typeof n[e]?n[e]:1===t?n[e].one:n[e].other.replace("{{count}}",t),o.addSuffix?o.comparison>0?"halfAMinute"===e?"ใน"+a:"ใน "+a:a+"ที่ผ่านมา":a}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var n={lessThanXSeconds:{one:"น้อยกว่า 1 วินาที",other:"น้อยกว่า {{count}} วินาที"},xSeconds:{one:"1 วินาที",other:"{{count}} วินาที"},halfAMinute:"ครึ่งนาที",lessThanXMinutes:{one:"น้อยกว่า 1 นาที",other:"น้อยกว่า {{count}} นาที"},xMinutes:{one:"1 นาที",other:"{{count}} นาที"},aboutXHours:{one:"ประมาณ 1 ชั่วโมง",other:"ประมาณ {{count}} ชั่วโมง"},xHours:{one:"1 ชั่วโมง",other:"{{count}} ชั่วโมง"},xDays:{one:"1 วัน",other:"{{count}} วัน"},aboutXMonths:{one:"ประมาณ 1 เดือน",other:"ประมาณ {{count}} เดือน"},xMonths:{one:"1 เดือน",other:"{{count}} เดือน"},aboutXYears:{one:"ประมาณ 1 ปี",other:"ประมาณ {{count}} ปี"},xYears:{one:"1 ปี",other:"{{count}} ปี"},overXYears:{one:"มากกว่า 1 ปี",other:"มากกว่า {{count}} ปี"},almostXYears:{one:"เกือบ 1 ปี",other:"เกือบ {{count}} ปี"}};e.exports=t.default},870:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(194),n=function(e){return e&&e.__esModule?e:{default:e}}(a),u=(0,n.default)({LT:"h:mm aa",LTS:"h:mm:ss aa",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY h:mm aa",LLLL:"dddd, MMMM D YYYY h:mm aa"});t.default=u,e.exports=t.default},871:function(e,t,o){"use strict";function a(e,t,o,a){return n[e]}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var n={lastWeek:"[last] dddd [at] LT",yesterday:"[yesterday at] LT",today:"[today at] LT",tomorrow:"[tomorrow at] LT",nextWeek:"dddd [at] LT",other:"L"};e.exports=t.default},872:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e){return Number(e)}Object.defineProperty(t,"__esModule",{value:!0});var u=o(196),r=a(u),d=o(195),s=a(d),l={narrow:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],short:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],long:["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"]},i={short:["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."],long:["มกราคาม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"]},f={uppercase:["น."],lowercase:["น."],long:["นาฬิกา"]},c={ordinalNumber:n,weekday:(0,r.default)(l,"long"),weekdays:(0,s.default)(l,"long"),month:(0,r.default)(i,"long"),months:(0,s.default)(i,"long"),timeOfDay:(0,r.default)(f,"long",function(e){return e/12>=1?1:0}),timesOfDay:(0,s.default)(f,"long")};t.default=c,e.exports=t.default},873:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(197),u=a(n),r=o(199),d=a(r),s=o(198),l=a(s),i=o(200),f=a(i),c=/^(\d+)(th|st|nd|rd)?/i,m={narrow:/^(su|mo|tu|we|th|fr|sa)/i,short:/^(sun|mon|tue|wed|thu|fri|sat)/i,long:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},h={any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},y={short:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,long:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},M={any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},p={short:/^(am|pm)/i,long:/^([ap]\.?\s?m\.?)/i},b={any:[/^a/i,/^p/i]},Y={ordinalNumbers:(0,l.default)(c),ordinalNumber:f.default,weekdays:(0,u.default)(m,"long"),weekday:(0,d.default)(h,"any"),months:(0,u.default)(y,"long"),month:(0,d.default)(M,"any"),timesOfDay:(0,u.default)(p,"long"),timeOfDay:(0,d.default)(b,"any")};t.default=Y,e.exports=t.default},930:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(869),u=a(n),r=o(870),d=a(r),s=o(871),l=a(s),i=o(872),f=a(i),c=o(873),m=a(c),h={formatDistance:u.default,formatLong:d.default,formatRelative:l.default,localize:f.default,match:m.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};t.default=h,e.exports=t.default}});
//# sourceMappingURL=7b80397635872b8b4cec.js.map
