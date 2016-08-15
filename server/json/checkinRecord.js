module.exports = function (app) {
    app.get('/entry/ManageAssessmentProgram/getAllPrograms',(req,res)=> {
        res.json(require('./AllPrograms.json'))
})
    app.get('/entry/surveyBase/getAllQuestionNaires',(req,res)=>
    {res.json(require('./AllQuestionNaires.json'))})


    app.post('/ManageAssessmentProgram/addEvaluationProgram',(req,res)=>
    {res.json(require('./AddEvaluationProgramResult.json'))})

    app.get('/ManageAssessmentProgram/editInitEvaluationProgram/:id',(req,res)=>
    {res.json(require('./initEditProgramEvaluation.json'))}
    )

    app.get('/ProgramExecute/init/*',(req,res)=>{
        res.json(require('./initProgramExec.json'))
    })

    app.post('/ProgramExecute/addAssessed/:id',(req,res)=>{
        res.json(require('./addAssessedResult'))
    })

    app.get('/ProgramExecute/findAssessed',(req,res)=>{
        res.json(require('./findAssessed.json'))
    })

    app.post('/ProgramExecute/sendAssessorToEdit/*',(req,res)=>{
        res.json(require('./Iterator.json'))//调用外部接口后台统一返回
    })

    app.post('/ProgramExecute/sendVerify/*',(req,res)=>{
        res.json(require('./Iterator.json'))//调用外部接口后台统一返回
    })

    app.post('/ProgramExecute/sendQuestionsToWrite/*',(req,res)=>{
        res.json(require('./Iterator.json'))//调用外部接口后台统一返回
    })

    app.post('/ProgramExecute/getAssessors/:Assessed',(req,res)=>{
        res.json(require('./getAssessed.json'))
    })

    app.get('/ProgramExecute/*/getAssessors/*',(req,res)=>{
        res.json(require('./getAssessor.json'))
    })

    app.get("/QuestionNaires/getQuestionNaires",(req,res)=>{
        res.json(require('./QuestionNairesList.json'))
    })

    app.get("/Assessor/init*",(req,res)=>{
        res.json(require('./AssessorInit.json'));
})
    app.get("/Assessor/search*",(req,res)=>{
        res.json(require('./AssessorSearch.json'));
})
    app.get("/Assessor/approveInit*",(req,res)=>{
        res.json(require('./AssessorInit.json'));
})
    app.get("/entry/evaluation/init/*",(req,res)=>{
        res.json(require('./evaluationInit.json'));
})
    app.get("/entry/surveyBase/init*",(req,res)=>{
        res.json(require('./initQuestionnaire.json'));
})
    app.get("/entry/surveyBase/getDimensions",(req,res)=>{
        res.json(require('./initDimesionList.json'));
})
    app.post("/surveyBase/submit",(req,res)=>{
        res.json(require('./initQuestionnaire.json'));
})
    app.post("/entry/saveEvaluation/*",(req,res)=>{
        res.json(require('./initQuestionnaire.json'));
})
    app.get("/entry/report/getReportResult*",(req,res)=>{
        res.json(require('./tsconfig.json'));
})
    app.get("/entry/ManageAssessmentProgram/calcEvaluationProgram/*",(req,res)=>{
        res.json(require('./CalcEvaluationProgram.json'));
})
};;;;
