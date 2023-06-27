/*
 * 入力欄追加
 */
function insert_textbox(){
    //1行追加
    table = document.getElementById("kagentable");      
    var tr = table.insertRow(table.rows.length);
    
    //テキストボックス追加
    var td = tr.insertCell();
    //td.innerHTML = '<textarea name="form_traTRANSFER[]" id="" cols="70" rows="3" class="form_traTRANSFER[]" onchange="kagenformcheck();"></textarea><input type="hidden" name="form_traTRANSFER_id[]" value="">';
    td.innerHTML = '<input type="text" size="50" name="form_traTRANSFER[]" id="" class="form_traTRANSFER[]" onchange="kagenformcheck();"><input type="hidden" name="form_traTRANSFER_id[]" value="">';
    
    //削除ボタン追加
    var td = tr.insertCell();
    td.innerHTML = '<input type="button" value="削除" onclick="delete_textbox(this);">';
    
    //入力件数変更
    document.getElementById("kensu").innerHTML = (table.rows.length) + '件入力済み';
}

/*
 * 入力欄削除
 */
function delete_textbox(obj){
    //行を取得する
    tr = obj.parentNode.parentNode;

    //行を削除する
    tr.parentNode.deleteRow(tr.sectionRowIndex);

    table = document.getElementById("kagentable");

    //行数が0行の場合は1行追加
    if(table.rows.length == 0)
    {
        //1行追加    
        var tr = table.insertRow(table.rows.length);

        //テキストボックス追加
        var td = tr.insertCell();
        //td.innerHTML = '<textarea name="form_traTRANSFER[]" id="" cols="70" rows="3" class="form_traTRANSFER[]" onchange="kagenformcheck();"></textarea><input type="hidden" name="form_traTRANSFER_id[]" value="">';
        td.innerHTML = '<input type="text" size="50" name="form_traTRANSFER[]" id="" class="form_traTRANSFER[]" onchange="kagenformcheck();"><input type="hidden" name="form_traTRANSFER_id[]" value="">';

        //削除ボタン追加
        var td = tr.insertCell();
        td.innerHTML = '<input type="button" value="削除" onclick="delete_textbox(this);">';        
    }
    
    //入力件数変更
    document.getElementById("kensu").innerHTML = (table.rows.length) + '件入力済み';
}

function select_pulldown()
{
    //選択した振込先を取得
    var transfer = document.getElementById("sehTRANSFER_pulldown").value;
    
    //振込先テキストエリアの内容作成
    var transfer_text = "お振込のご案内\nお手数ですが下記口座へお振込願います。\n";
    
    if(document.getElementById("transfer_type").value == "1")
    {
        transfer_text = transfer_text + "なお、振込手数料はお客様にてご負担ください。\n";
    }
    transfer_text = transfer_text + "(" + transfer + ")";
    
    //テキストエリアの内容を書き換える
    document.getElementById("form_sehTRANSFER_0").value = transfer_text;    
    console.log(transfer_text);
}