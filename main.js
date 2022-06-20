function UploadProcess(){
    var fileUpload  = document.getElementById("fileUpload");

    var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xls|.xlsx)$/;
    if (regex.test(fileUpload.value.toLowerCase()))
    {
        if  (typeof(FileReader) != 'undefined')
        {
            var reader = new FileReader();

            if (reader.readAsBinaryString)
            {
                reader.onload =function(e){
                    GetTableFromExcel(e.target.result);
                };

                reader.readAsBinaryString(fileUpload.files[0]);
            }

        }
        else   {
            alert("This browser does not support HTML5.");
        }
    }else {
        alert("Please upload a valid Excel file.");
    }
}


function GetTableFromExcel(data)
{

    // Read the excel file data in binary
    var workbook = XLSX.read(data ,{
        type:'binary'
    });


      //get the name of First Sheet.
    var Sheet = workbook.SheetNames[0];
    //Read all rows from First Sheet into an JSON array.
    var excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[Sheet]);

    //Create a HTML Table element.      

    var myTable = document.createElement ("table");
    myTable.border="1";

     //Add the header row.
    var row = myTable.insertRow(0);

     // Add the header cells.


    headerCell = document.createElement("TH");
    headerCell.innerHTML = "刀號";
    row.appendChild(headerCell);


    headerCell = document.createElement("TH");
    headerCell.innerHTML="程式編號"
    row.appendChild(headerCell)


    headerCell = document.createElement("TH");
    headerCell.innerHTML="刀具名稱"
    row.appendChild(headerCell)

    headerCell = document.createElement("TH");
    headerCell.innerHTML="刀刃"
    row.appendChild(headerCell)
   
    headerCell = document.createElement("TH");
    headerCell.innerHTML="刀長"
    row.appendChild(headerCell)
   
    headerCell = document.createElement("TH");
    headerCell.innerHTML="伸出長"
    row.appendChild(headerCell)
   
    headerCell = document.createElement("TH");
    headerCell.innerHTML="柄徑"
    row.appendChild(headerCell)

    headerCell = document.createElement("TH");
    headerCell.innerHTML="進給"
    row.appendChild(headerCell)

    headerCell = document.createElement("TH");
    headerCell.innerHTML="轉速"
    row.appendChild(headerCell)

    headerCell = document.createElement("TH");
    headerCell.innerHTML="時間"
    row.appendChild(headerCell)
    for (var i = 0; i < excelRows.length ; i++)
    {
        //Add the data row.
        var row = myTable.insertRow(-1);

        cell = row.insertCell(-1);
        cell.innerHTML = excelRows[i]["刀號"];


        cell = row.insertCell(-1);
        cell.innerHTML = excelRows[i]["程式編號"];

        cell = row.insertCell(-1);
        cell.innerHTML = excelRows[i]["刀具名稱"];

        cell = row.insertCell(-1);
        cell.innerHTML = excelRows[i]["刃長"];

        cell = row.insertCell(-1);
        cell.innerHTML = excelRows[i]["刀長"];

        cell = row.insertCell(-1);
        cell.innerHTML = excelRows[i]["伸出長"];

        cell = row.insertCell(-1);
        cell.innerHTML = excelRows[i]["柄徑"];

        cell = row.insertCell(-1);
        cell.innerHTML = excelRows[i]["進給"];
        cell = row.insertCell(-1);
        cell.innerHTML = excelRows[i]["轉速"];
        cell = row.insertCell(-1);
        cell.innerHTML = excelRows[i]["時間"];
    }


    var ExcelTable = document.getElementById("ExcelTable");
    ExcelTable.innerHTML = "";
    ExcelTable.appendChild(myTable);
};





