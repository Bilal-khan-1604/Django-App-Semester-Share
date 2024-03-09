let url;
let firstClass;

// this function  is used to get the class of an element and return it as a string depending on which the value of url is set
function forFileSelection(buttonElement) {
    firstClass = buttonElement.classList[0];
    let remainingClass = firstClass.substring(9);

    if (remainingClass == 3031) {
        url = 'https://onedrive.live.com/download?resid=2F2AE83C9A84D550%21236&authkey=!AHKdVZjkusam1xs&em=2';
    }
    else if (remainingClass == 4051) {
        url = 'https://onedrive.live.com/download?resid=2F2AE83C9A84D550%21210&authkey=!AB736ncDlICoVOs&em=2';
    }
    else if (remainingClass == 4052) {
        url = 'https://onedrive.live.com/download?resid=2F2AE83C9A84D550%21218&authkey=!AEvYD1p971B9swA&em=2';
    }
    else if (remainingClass == 4081) {
        url = 'https://onedrive.live.com/download?resid=2F2AE83C9A84D550%21217&authkey=!AKR7psFlK9vtSK4&em=2';
    }
    else if (remainingClass == 4091) {
        url = 'https://onedrive.live.com/download?resid=2F2AE83C9A84D550%21211&authkey=!ACFs9IgRhbSapLc&em=2';
    }
    else if (remainingClass == 4092) {
        url = 'https://onedrive.live.com/download?resid=2F2AE83C9A84D550%21212&authkey=!AD-KEUqhIJOA5aE&em=2';
    }
    else if (remainingClass == 4121) {
        url = 'https://onedrive.live.com/download?resid=2F2AE83C9A84D550%21232&authkey=!AFL9d1tRUUGTZaw&em=2';
    }
    else if (remainingClass == 4122) {
        url = 'https://onedrive.live.com/download?resid=2F2AE83C9A84D550%21230&authkey=!AKLP4l7ySUQZYRU&em=2';
    }
    else if (remainingClass == 5011) {
        url = 'https://onedrive.live.com/download?resid=2F2AE83C9A84D550%21233&authkey=!ACQhfX1TOCY_Xdk&em=2';
    }
    else if (remainingClass == 5021) {
        url = 'https://onedrive.live.com/download?resid=2F2AE83C9A84D550%21234&authkey=!AGfLep15sSBMbZE&em=2';
    }
    else if (remainingClass == 5031) {
        url = 'https://onedrive.live.com/download?resid=2F2AE83C9A84D550%21231&authkey=!AO4CfGeBNMTA9pg&em=2';
    }
    else if (remainingClass == 5091) {
        url = 'https://onedrive.live.com/download?resid=2F2AE83C9A84D550%21235&authkey=!AO3MOJ_YfpQAUW4&em=2';
    }
    else if (remainingClass == 5121) {
        url = 'https://onedrive.live.com/download?resid=2F2AE83C9A84D550%21231&authkey=!AO4CfGeBNMTA9pg&em=2';
    }
    else if (remainingClass == 5201) {
        url = 'https://onedrive.live.com/download?resid=2F2AE83C9A84D550%21232&authkey=!AFL9d1tRUUGTZaw&em=2';
    }
    else if (remainingClass == 5202) {
        url = 'https://onedrive.live.com/download?resid=2F2AE83C9A84D550%21230&authkey=!AKLP4l7ySUQZYRU&em=2';
    }
}

// this function downloads a file when called
function downloadFile() {

    var downloadLink = document.createElement('a');
    downloadLink.href = url;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

}

let downloadButton = document.getElementById("downloadButton");

// this function opens the first modal if retry is clicked in the second modal upon a failed download.
function handleEvent() {
    document.getElementById("closeSecondModal").click();
    downloadFile();
};