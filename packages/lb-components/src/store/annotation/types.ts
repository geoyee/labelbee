import { RectOperation, TagOperation } from '@sensetime/annotation';
import { ANNOTATION_ACTIONS } from '@/store/Actions';
import { IStepInfo } from '@/types/step';
import { OnSubmit, IFileItem, GetFileData } from '@/types/data';
import { ESubmitType } from '@/constant';

export type ToolInstance = typeof RectOperation | typeof TagOperation;

interface CommonActions {
  type: string;
  payload?: any;
}

export interface AnnotationState {
  toolInstance: ToolInstance | null;
  imgList: IFileItem[];
  config: string;
  imgIndex: number;
  imgPageSize: number;
  step: number;
  stepList: IStepInfo[];
  imgNode: HTMLImageElement;
  onSubmit?: OnSubmit;
  getFileData?: GetFileData;
}

interface UpdateToolInstance {
  type: typeof ANNOTATION_ACTIONS.UPDATE_TOOL_INSTANCE;
  payload: {
    toolInstance: ToolInstance;
  };
}

interface UpdateImgList {
  type: typeof ANNOTATION_ACTIONS.UPDATE_IMG_LIST;
  payload: {
    imgList: IFileItem[];
  };
}

interface UpdateAnnotationConfig {
  type: typeof ANNOTATION_ACTIONS.UPDATE_ANNOTATION_CONFIG;
  payload: {
    config: string;
  };
}

interface PageForward extends CommonActions {
  type: typeof ANNOTATION_ACTIONS.PAGE_FORWARD;
}

interface PageBackward extends CommonActions {
  type: typeof ANNOTATION_ACTIONS.PAGE_BACKWARD;
}

interface PageJump {
  type: typeof ANNOTATION_ACTIONS.PAGE_JUMP;
  payload: {
    imgIndex: number;
  };
}

interface PageJump {
  type: typeof ANNOTATION_ACTIONS.PAGE_JUMP;
  payload: {
    imgIndex: number;
  };
}

interface PageJump {
  type: typeof ANNOTATION_ACTIONS.PAGE_JUMP;
  payload: {
    imgIndex: number;
  };
}

interface SubmitFileData extends CommonActions {
  type: typeof ANNOTATION_ACTIONS.SUBMIT_FILE_DATA;
  payload: {
    submitType: ESubmitType;
  }
}

interface LoadFileData extends CommonActions {
  type: typeof ANNOTATION_ACTIONS.LOAD_FILE_DATA;
  payload: {
    nextIndex: number;
  };
}

interface SetTaskConfig {
  type: typeof ANNOTATION_ACTIONS.SET_TASK_CONFIG;
  payload: {
    stepList: IStepInfo[];
    step: number;
  };
}
interface InitTool {
  type: typeof ANNOTATION_ACTIONS.INIT_TOOL;
  payload: {
    stepList: IStepInfo[];
    step: number;
  };
}

interface UpdateOnSubmit {
  type: typeof ANNOTATION_ACTIONS.UPDATE_ON_SUBMIT;
  payload: {
    onSubmit: OnSubmit;
  };
}

interface UpdateGetFileData {
  type: typeof ANNOTATION_ACTIONS.UPDATE_GET_FILE_DATA;
  payload: {
    getFileData: GetFileData;
  };
}

interface CopyBackWordResult {
  type: typeof ANNOTATION_ACTIONS.COPY_BACKWARD_RESULT,
}

export type AnnotationActionTypes =
  | UpdateToolInstance
  | UpdateImgList
  | UpdateAnnotationConfig
  | UpdateAnnotationConfig
  | UpdateAnnotationConfig
  | PageForward
  | PageBackward
  | PageJump
  | SubmitFileData
  | LoadFileData
  | SetTaskConfig
  | InitTool
  | UpdateOnSubmit
  | UpdateGetFileData
  | CopyBackWordResult;
