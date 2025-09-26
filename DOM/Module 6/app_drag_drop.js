document.addEventListener('DOMContentLoaded',function(){
    const items = document.querySelectorAll('.draggable');
    let dragsrcel = null;
    function handledragstart(e){
        dragsrcel = this;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html',this.innerHTML);
        this.classList.add('dragging');
    }
    function handledragover(e){
        if(e.preventDefault()){
            e.preventDefault();
        }
        return false;
    }
    function handledrop(e){
        if(e.stopPropagation){
            e.stopPropagation();
        }
        if(dragsrcel !== this){
            dragsrcel.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html')
        }
        return false;
    }

    function handledragend(){
        this.classList.remove('dragging')
    }
    items.forEach((item)=>{
        item.addEventListener('dragstart',handledragstart);
        item.addEventListener('dragover',handledragover);
        item.addEventListener('drop',handledrop);
        item.addEventListener('dragend',handledragend);



    })


})