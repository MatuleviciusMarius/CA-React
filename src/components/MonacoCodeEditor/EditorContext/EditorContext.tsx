import React, { createContext, useReducer, useContext, ReactNode } from 'react';

interface EditorState {
  htmlContent: string;
  cssContent: string;
  jsContent: string;
}

type Action =
  | { type: 'SET_HTML_CONTENT'; payload: string }
  | { type: 'SET_CSS_CONTENT'; payload: string }
  | { type: 'SET_JS_CONTENT'; payload: string };

const initialState: EditorState = {
  htmlContent: '',
  cssContent: '',
  jsContent: '',
};

// Create the reducer function
function editorReducer(state: EditorState, action: Action): EditorState {
  switch (action.type) {
    case 'SET_HTML_CONTENT':
      return { ...state, htmlContent: action.payload };
    case 'SET_CSS_CONTENT':
      return { ...state, cssContent: action.payload };
    case 'SET_JS_CONTENT':
      return { ...state, jsContent: action.payload };
    default:
      return state;
  }
}

const EditorContext = createContext<{
  state: EditorState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

export const EditorProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(editorReducer, initialState);

  return (
    <EditorContext.Provider value={{ state, dispatch }}>
      {children}
    </EditorContext.Provider>
  );
};

export const useEditorContext = () => {
  const context = useContext(EditorContext);

  if (!context) {
    throw new Error('useEditorContext must be used within an EditorProvider');
  }

  return context;
};