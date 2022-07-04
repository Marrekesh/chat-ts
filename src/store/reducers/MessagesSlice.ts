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
    to: string,
    unread?: boolean
}

export type TMessage = Array<IMessage>
export type LastMessage = Array<IMessage>

interface IStateMessage {
    text: Text,
    messages: TMessage,
    lastMessage: IMessage,
    img: string,
    imgName: string,
    isLoadingImg: boolean,
    isLoading: boolean,
    error: string
}

const initialState: IStateMessage = {
    text: '',
    messages: [],
    lastMessage: {
        createdAd: {
            seconds: 0,
            nanoseconds: 0
        },
        from: '',
        to: '',
        text: '',
        media: '',
        unread: false
    },
    img: '',
    imgName: '',
    isLoading: false,
    isLoadingImg: false,
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
        setLastMessage(state, action: PayloadAction<IMessage>) {
            state.lastMessage.createdAd.seconds = action.payload.createdAd.seconds
            state.lastMessage.createdAd.nanoseconds = action.payload.createdAd.nanoseconds
            state.lastMessage.from = action.payload.from
            state.lastMessage.to = action.payload.to
            state.lastMessage.media = action.payload.media
            state.lastMessage.text = action.payload.text
            state.lastMessage.unread = action.payload.unread
           
        },
        setImgUrl(state, action: PayloadAction<string>) {
            state.img = action.payload
        },
        setImgName(state, action: PayloadAction<string>) {
            state.imgName = action.payload
        },
        removeImgName(state) {
            state.imgName = ''
        },
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload
        },
        setImgLoading(state, action: PayloadAction<boolean>) {
            state.isLoadingImg = action.payload
        },
    }
})

export const {
    setText,
    setMessages, 
    setError, 
    setLoading, 
    setImgUrl, 
    setImgLoading, 
    setLastMessage,
    setImgName,
    removeImgName} = messageSlice.actions;

export default messageSlice.reducer