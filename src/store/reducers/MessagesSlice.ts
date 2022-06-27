import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Icreated {
    seconds: number,
    nanoseconds: number
}

type Text = string

export interface IMessage {
    createdAd: Icreated
    from: string
    media: string
    text: string
    to: string
}

export type TMessage = Array<IMessage>

interface IStateMessage {
    text: Text,
    messages: TMessage,
    isLoading: boolean,
    error: string
}

const initialState: IStateMessage = {
    text: '',
    messages: [],
    isLoading: false,
    error: ''
}


const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        setText(state, action: PayloadAction<Text>) {
            state.text = action.payload
        },
        setMessages(state, action: PayloadAction<TMessage>) {
            state.messages = action.payload
        },
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload
        },
    }
})

export const {setText, setMessages, setError, setLoading} = messageSlice.actions;

export default messageSlice.reducer