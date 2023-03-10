declare interface RecordInfo {
    maxValue: number;
    label: string;
    count: number;
    startTime: number;
    maxTime: number;
    device: string;
}

declare interface Expression {
    value: number;
    label: string;
    target: string;
    time: number;
}

export { RecordInfo, Expression };
