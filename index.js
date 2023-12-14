
$(document).ready(function () {

    $(".add").click(function () {
        $(".main").append(`
        <div class="Container" style="border: 1px solid rgb(207, 203, 203); border-bottom:1px white; width: 100%;
        height: 130%;">
        <div class="imgTitle" style="border: 1px solid rgb(207, 203, 203);
        width: 20%;
        padding-bottom: 20px;">
            <img src="" class="imageDisplay" style="padding-left: 15px;
            padding-top: 20px; height: 80%;
            width: 80%;">
        </div>
        <div class="append" style="width: 100%; padding-top: 40px; padding-bottom: 50px; padding-left:10px;">
            <div>
            <input class="img2" type="file" name="files[]" multiple>


            <select name="drp" class="drp">
                <option value="primary" class="primary">Primary Image</option>
                <option selected value="secondary" class="secondary">Secondary Image</option>
            </select>
            <button class="rmv" style="border-style: none; background-color: white;">Remove</button>
        </div>
            </div>
    </div>
    </div>
    <body/>`);
    });

    // remove appended block
    $(".bd").on("click", ".rmv", function () {
        console.log("clicked")
        $(this).parent().parent().parent().remove()
    })

    // select only one primary
    // primary secondry
    $(".append").click(function () {
        // $(".in").click(function () {
        $(".drp").change(function () {
            if ($(this).val() === "primary") {
                $(".drp").not($(this)).val("secondary");
            }
        });
        // });
    });

    // image handling
    $(document).on("change", ".img2", function () {
        const fileInput = this;
        const preview = $(fileInput).closest(".Container").find(".imgTitle img")[0];

        if (fileInput.files && fileInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                preview.src = e.target.result;
            };
            reader.readAsDataURL(fileInput.files[0]);
        }
    });
});












