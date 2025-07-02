"use client";

import { Label, Input, Textarea, LabelInputContainer } from "./";
import { IoSendSharp } from "react-icons/io5";
import { useReducer, useState } from "react";
import { sendMail } from "@/lib/actions";
import { MagicButton } from "../animations";

interface Props {
    className?: string;
    currentEmail: string;
}

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
    loading: boolean;
    error: {
        hasError: boolean;
        message: string;
    };
}

enum ActionTypes {
    UPDATE_STATE = "UPDATE_STATE",
    RESET_STATE = "RESET_STATE",
}

type Action = {
    type: ActionTypes;
    payload: Partial<FormData>;
};

const initialInputState = {
    name: "",
    email: "",
    subject: "",
    message: "",
    loading: false,
    error: {
        hasError: false,
        message: "",
    },
};

function inputReducer(state: FormData, action: Action) {
    switch (action.type) {
        case ActionTypes.UPDATE_STATE:
            return {
                ...state,
                ...action.payload,
            };

        case ActionTypes.RESET_STATE:
            return initialInputState;

        default:
            return state;
    }
}

export function ContactForm({ className, currentEmail }: Props) {
    const [state, dispatch] = useReducer(inputReducer, initialInputState);
    const [sent, setSent] = useState(false);

    function handleInputChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        dispatch({
            type: ActionTypes.UPDATE_STATE,
            payload: {
                [e.target.id]: e.target.value,
            },
        });
    }

    function isFormValid() {
        return (
            state.name.trim() &&
            state.email.trim() &&
            state.subject.trim() &&
            state.message.trim()
        );
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (state.loading || sent) return;

        if (!isFormValid()) {
            return dispatch({
                type: ActionTypes.UPDATE_STATE,
                payload: {
                    error: { hasError: true, message: "Please fill all fields!" },
                },
            });
        }

        dispatch({
            type: ActionTypes.UPDATE_STATE,
            payload: { loading: true, error: { hasError: false, message: "" } },
        });

        const { success, message } = await sendMail({
            ...state,
            currentEmail,
        });

        if (success) {
            setSent(true);
            dispatch({
                type: ActionTypes.RESET_STATE,
                payload: initialInputState,
            });
        } else {
            dispatch({
                type: ActionTypes.UPDATE_STATE,
                payload: {
                    loading: false,
                    error: { hasError: true, message: message || "Failed to send email. Please try again." },
                },
            });
        }
    }

    return (
        <form
            className={`relative ${className}`}
            onSubmit={handleSubmit}
        >
            <h6 className="text-center text-foreground font-semibold mb-5">
                Leave your email and I will get back to you within 24 hours
            </h6>
            <LabelInputContainer className="mb-4">
                <Label htmlFor="name">Name</Label>
                <Input
                    id="name"
                    placeholder="Thomas Pappas"
                    type="text"
                    value={state.name}
                    onChange={handleInputChange}
                />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    placeholder="thomas.marklin.pappas@gmail.com"
                    type="email"
                    value={state.email}
                    onChange={handleInputChange}
                />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
                <Label htmlFor="subject">Subject</Label>
                <Input
                    id="subject"
                    placeholder="Want to build a website"
                    type="text"
                    value={state.subject}
                    onChange={handleInputChange}
                />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
                <Label htmlFor="message">Message</Label>
                <Textarea
                    rows={3}
                    id="message"
                    placeholder="Looking for a proficient software developer skilled in C# and Angular for a specific project"
                    className="resize-none"
                    value={state.message}
                    onChange={handleInputChange}
                />
            </LabelInputContainer>
            {
                sent ? (
                    <p className="text-center text-sm text-slate-400">
                        Your message has been sent successfully!
                    </p>
                ) : (
                    <button
                        type="submit"
                        disabled={state.loading || sent}
                        className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none"
                    >
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-white dark:bg-slate-950 px-3 font-medium text-slate-950 dark:text-white backdrop-blur-3xl gap-2">
                            {state.loading ? "Wait!" : "Submit"}
                            {state.loading ? <LoadingIcon /> : <IoSendSharp />}
                        </span>
                    </button>
                )
            }

            <p className="mt-4 text-sm text-center text-red-500  relative z-30">
                {state.error.hasError &&
                    (state.error.message
                        ? state.error.message
                        : "Something went wrong! Please try again!")}
            </p>

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-10 sm:my-5 h-[1px] w-full" />
        </form>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LoadingIcon = () => {
    return (
        <svg
            aria-hidden="true"
            role="status"
            className="inline mr-3 w-5 h-5 text-foreground animate-spin"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
            ></path>
            <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
            ></path>
        </svg>
    );
};
