/**
 * Created by tao on 16/7/6.
 */
    const pre = "/entry/";
export const getAssessmentProgramListUrl = pre+'ManageAssessmentProgram/getAllPrograms';
export const editAssessmentProgramUrl = pre+`ManageAssessmentProgram/editInitEvaluationProgram/{id}`;
export const getQuestionnaireList= pre+"QuestionNaires/getQuestionNaires";
export const getProgramPersonUrl = pre+"ProgramExecute/init/{id}";
export const addEvaluationProgramUrl = pre+"ManageAssessmentProgram/addEvaluationProgram";
export const getAllQuestionnaireUrl =  pre+"surveyBase/getAllQuestionNaires";
export const getAssessedUrl= pre+"ProgramExecute/findAssessed";
export const addAssessedUrl=pre+`ProgramExecute/addAssessed/{id}`;
export const delAssessedUrl= pre+`ProgramExecute/delAssessed/{programId}/{assessedId}`;
export const editEvaluationProgramUrl= pre+`ManageAssessmentProgram/editEvaluationProgram`;
export const sendAssessorToEdit= pre+`ProgramExecute/sendAssessorToEdit/`;
export const sendVerify=pre+`ProgramExecute/sendVerify/`;
export const sendQuestionsToWrite=pre+`ProgramExecute/sendQuestionsToWrite/`;
export const getAssessorList=pre+`ProgramExecute/{programId}/getAssessors/{Assessed}`;
export const getAssessorMobileUrl=pre+"Assessor/init?programId={programId}&assessedId={assessedId}";
export const getAssessorSearchMobileUrl=pre+"Assessor/search?keyword={keyword}";
export const getAssessorSaveMobileUrl=pre+"Assessor/save";
export const getAssessorApproveInitMobileUrl=pre+"Assessor/approveInit?programId={programId}&assessedId={assessedId}";
export const postAssessorApproveUrl=pre+"Assessor/approve";
export const getApprovedListUrl=pre+"Assessor/ApprovedList?programId={programId}&assessedId={assessedId}";
export const postSurveyBaseUrl = pre+"surveyBase/submit";
export const getSurveyBaseInitUrl = pre+"surveyBase/init?SurveyId={id}";
export const getEvaluationInitUrl = pre+"evaluation/init/{evaluationId}";
export const postSaveEvaluationUrl = pre+"evaluation/saveEvaluation/{evaluationId}";
export const getDimensionsUrl = pre + "surveyBase/getDimensions";
export const getReportDownloadUrl = pre + "report/download/{id}";
export const calculateReportUrl = pre + "ManageAssessmentProgram/calcEvaluationProgram/{id}";