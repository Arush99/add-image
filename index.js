
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
            width: 80%; display: none;" alt="Property Image">
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

    // displaying image main
    // $(".main").on("change", ".append input", function () {
    //     const file = $(this)[0].files[0];
    //     if (!file) return;

    //     const imageId = $(this).data("id"); // Get unique ID from the input's data attribute
    //     console.log("Processing image with ID:", imageId);
    //     const reader = new FileReader();
    //     reader.onload = function (event) {
    //         $(`.imageDisplay[data-id="${imageId}"]`).attr("src", event.target.result); // Use unique ID to target the corresponding image
    //         $(`.imageDisplay[data-id="${imageId}"]`).show();
    //     };
    //     reader.readAsDataURL(file);
    // });
    // $(".img").change(function () {
    //     $("input").each(function (i) {
    //         var file = $(this)[0].files[0];
    //         if (!file) {
    //             return;
    //         }
    //         console.log($(file))
    //         var reader = new FileReader();

    //         reader.onload = function (event) {
    //             $(".imageDisplay").attr("src", event.target.result);
    //             $(".imageDisplay").show();
    //         };
    //         reader.readAsDataURL(file);
    //     });
    // });

    // displaying appended image
    // $(".img2").change(function () {
    //     var file = $(this)[0].files[0];
    //     if (!file) {
    //         return;
    //     }
    //     console.log($(file))
    //     var reader = new FileReader();
    //     reader.onload = function (event) {
    //         $(".imageDisplay2").attr("src", event.target.result);
    //         $(".imageDisplay2").show();
    //     };
    //     reader.readAsDataURL(file);
    // });


    // select only one primary
    $(".append").click(function () {
        $(".in").click(function () {
            $(".drp").change(function () {
                if ($(this).val() === "primary") {
                    $(".drp").not($(this)).val("secondary");
                }
            });
        });
    });
    // $(".in").click(function () {
    //     console.log("Checking for existing primary...");


    //     $(".drp").click(function () {
    //         var $primaryDropdown = $('.drp').filter(function () {
    //             return $(this).val() === 'primary';
    //         });
    //         if ($primaryDropdown.length > 1) {
    //             $primaryDropdown.first().val('secondary');
    //         }
    //     })
    // })
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












