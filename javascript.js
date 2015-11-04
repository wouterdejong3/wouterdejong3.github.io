function kiesknop() {
    if (document.getElementById('kiesproject').checked) {
        document.getElementById('project').style.display = 'block';
        document.getElementById('stage').style.display = 'none';

    }
    
    else if (document.getElementById('kiesstage').checked) {
        document.getElementById('stage').style.display = 'block';
        document.getElementById('project').style.display = 'none';

    }


}
