var btn = document.querySelector('#b1');
var input = document.querySelector('#inp1');
var output = document.querySelector('#d1');
var inputBtn = document.querySelector('#inputBtn');
var level = 0;
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function (e) {
    if (input.value == '')
        alert("Please write something");
    else {
        // const div = document.createElement("div") as HTMLDivElement;
        var className_1 = "class+".concat(level);
        var div1 = document.createElement('div');
        var done = document.createElement("button");
        done.innerText = "Done";
        done.setAttribute("id", "dn");
        div1.appendChild(done);
        div1.setAttribute('class', 'gridDiv');
        div1.setAttribute('class', className_1);
        var div2 = document.createElement('div');
        var delet = document.createElement("button");
        delet.innerText = "Remove";
        delet.setAttribute("id", "del");
        div2.appendChild(delet);
        div2.setAttribute('class', 'gridDiv');
        div2.setAttribute('class', className_1);
        var div3 = document.createElement('div');
        var span_1 = document.createElement("span");
        span_1.setAttribute('class', 'sp');
        span_1.innerText = input.value + " ";
        div3.appendChild(span_1);
        div3.setAttribute('class', 'gridDiv');
        div3.setAttribute('class', className_1);
        // const br = document.createElement("br") as HTMLBRElement;
        var div4 = document.createElement('div');
        var editBtn = document.createElement("button");
        //span.setAttribute('class','sp');
        editBtn.innerText = "Edit";
        div4.appendChild(editBtn);
        div4.setAttribute('class', 'gridDiv');
        div4.setAttribute('class', className_1);
        // div.appendChild(div3);
        // div.appendChild(div1);
        // div.appendChild(div2);
        // div?.appendChild(document.createElement("br"));
        // div?.appendChild(document.createElement("br"));
        output === null || output === void 0 ? void 0 : output.appendChild(div3);
        output === null || output === void 0 ? void 0 : output.appendChild(div1);
        output === null || output === void 0 ? void 0 : output.appendChild(div2);
        output === null || output === void 0 ? void 0 : output.appendChild(div4);
        input.value = '';
        delet === null || delet === void 0 ? void 0 : delet.addEventListener('click', function (e) {
            var toDelete = document.getElementsByClassName(className_1);
            for (var i = toDelete.length - 1; i >= 0; i--)
                toDelete[i].remove();
        });
        done === null || done === void 0 ? void 0 : done.addEventListener('click', function (e) {
            // const str:any =span.textContent ;
            // document.write(str.strike());
            span_1.style.textDecoration = 'line-through';
        });
        editBtn === null || editBtn === void 0 ? void 0 : editBtn.addEventListener('click', function () {
            input.value = span_1.innerText;
            var save = document.createElement('button');
            save.innerText = "Save";
            inputBtn.appendChild(save);
            save.addEventListener('click', function () {
                span_1.innerText = input.value;
                inputBtn.removeChild(save);
                input.value = '';
            });
        });
        level++;
    }
});
