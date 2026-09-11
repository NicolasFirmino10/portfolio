export type StackItem = {
    name: string;
    icon: string;
    featured?: boolean;
    invertOnDark?: boolean;
};

export type StackCategories = {
    frontend: StackItem[];
    backend: StackItem[];
    database: StackItem[];
    apis: StackItem[];
    tools: StackItem[];
};
