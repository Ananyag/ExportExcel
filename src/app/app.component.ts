import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  name  = 'ExportExcel';

  data = [
    {
      "id": 13,
      "context": "http://tempurl.org",
      "details": [
        {
          "name": "test1"
        },
        {
          "name": "test2"
        }
      ],
      "username": "testuser1",
      "custName": "cap1"
    },
    {
      "id": 14,
      "context": "http://tempurl.org",
      "details": [],
      "username": "testuser2",
      "custName": "cap2"
    }
  ];

  download() {
    let fileName = 'myCustomerList.csv';
    let columnNames = ["id", "context", "username", "custName"];
    let header = columnNames.join(',');

    let csv = header;
    csv += '\r\n';

    this.data.map(c => {
      csv += [c["id"], c["context"], c["username"], c["custName"]].join(',');
      csv += '\r\n';
    })

    var blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });

    var link = document.createElement("a");
    if (link.download !== undefined) {
      var url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}

