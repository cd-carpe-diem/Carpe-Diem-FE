import React from 'react';
import { styled, ThemeProvider } from '@mui/material/styles';
import config from '../../config';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

const Div = styled('div')`
    position: relative;
    margin: auto;
    height: 250px;
    cursor: pointer;
    transition: ${({ theme }) =>
        theme.transitions.create(['transform'], {
            duration: theme.transitions.duration.standard,
        })};

    &:hover {
        transform: scale(1.1);
        .title {
            display: block;
            align-items: center;
            justify-content: center;
            text-align: center;
            top: 50%;
            left: 10%;
        }
        .image {
            opacity: 0.5;
        }
    }
    .title {
        display: none;
        position: absolute;
        color: #f42e79;
        font-size: 18px;
        font-family: IBMPlexSansKR-Regular;
        font-weight: bold;
    }
`;

const Book = (props: any) => {
    return (
        <Div>
            <img
                className="image"
                style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                src={`https://${config.aws.bucket_name}.s3.${config.aws.region}.amazonaws.com/${props.album.coverImgUrl}`}
            />
            <div className="title">
                <div>
                    {dayjs(props.album.createdAt).tz('utc').format('YYYY년 MM월 DD일')} {props.album.title}
                </div>
            </div>
        </Div>
    );
};

export default Book;
