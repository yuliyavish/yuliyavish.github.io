new Vue({
    el:'#myApp1',
    data:{
        agentMessagesValue: 0,
        consumerMessagesValue: 0
    },
    methods:{
        updateData: function(data){
            debugger;
            if (data && data.newValue){
                var i;
                for (i=0; i< data.newValue.length; i++){
                    if (data.newValue[i].source === 'agent'){
                        this.agentMessagesValue++;
                    }
                    else if(data.newValue[i].source === 'visitor'){
                        this.consumerMessagesValue++;
                    }
                }
            }
        },
        saveNotesFunctions: function(){
            alert("Saved!");
        }
    },

    beforeMount(){
        lpTag.agentSDK.init({});
        lpTag.agentSDK.bind("chatTranscript.lines", this.updateData);
    },
    computed: {
        getDetails() {
            const paramsString = location.search;
            const searchParams = new URLSearchParams(paramsString);
            const result =  [...searchParams];
            return result;
        }
    }
});

