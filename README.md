# Date Range Picker

Fork from [dangrossman/daterangepicker](https://github.com/dangrossman/daterangepicker)

by the idea of [akexorcist/buddhist-year.js](https://gist.github.com/akexorcist/eb5e8266670721c191a62851e3d8bb3d)

Adding the option to display year in Buddhist calendar by setting isBuddhistYear: true (default: false)

```javascript
isBuddhistYear: true
```

## Example
The below example will display an empty single date picker 
```javascript
var DRP_singleOptions = {
    singleDatePicker: true,
    isBuddhistYear: true,
    autoUpdateInput: false,
    showDropdowns: true,
    locale: {
      format: 'DD/MM/YYYY',
      separator: ' / ',
      applyLabel: 'ตกลง',
      cancelLabel: 'ยกเลิก',
      fromLabel: 'ตั้งแต่',
      toLabel: 'ถึง',
      daysOfWeek: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ','ส'],
      monthNames: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
      firstDay: 0
    }
  };

$('#your_picker').daterangepicker(DRP_singleOptions).on("apply.daterangepicker", function (e, picker) {
		var val = DRP_singleOptions.isBuddhistYear? picker.toBuddhistYear(picker.startDate, picker.locale.format) : picker.startDate.format(picker.locale.format);
		picker.element.val(val);
    });
```


![Improvely.com](https://i.imgur.com/UTRlaar.png)

This date range picker component creates a dropdown menu from which a user can
select a range of dates. I created it while building the UI for [Improvely](http://www.improvely.com), 
which needed a way to select date ranges for reports.

Features include limiting the selectable date range, localizable strings and date formats,
a single date picker mode, a time picker, and predefined date ranges.

## [Documentation and Live Usage Examples](http://www.daterangepicker.com)

## [See It In a Live Application](https://awio.iljmp.com/5/drpdemogh)

## License

The MIT License (MIT)

Copyright (c) 2012-2019 Dan Grossman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
