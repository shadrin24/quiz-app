import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
    symbol: string;
    author: string;
    text?: string;
    likes?: number;
    comments?: number;
}

const SocialPost: React.FC<Props> = ({ symbol, author, text, likes, comments }) => {
    return (
        <View style={styles.socialPost}>
            <Text style={styles.postSymbol}>{symbol}</Text>
            <Text style={styles.postAuthor}>{author}</Text>
            {text && <Text style={styles.postText}>{text}</Text>}
            {(likes || comments) && (
                <View style={styles.postStats}>
                    {likes && <Text style={styles.postStatsText}>{likes} Likes</Text>}
                    {comments && <Text style={styles.postStatsText}>{comments} Comments</Text>}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    socialPost: {
        borderBottomWidth: 1,
        borderBottomColor: '#EEEEEE',
        paddingVertical: 12,
    },
    postSymbol: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 4,
    },
    postAuthor: {
        fontSize: 14,
        color: '#666666',
        marginBottom: 4,
    },
    postText: {
        fontSize: 14,
        color: '#000000',
        marginBottom: 8,
    },
    postStats: {
        flexDirection: 'row',
        gap: 16,
    },
    postStatsText: {
        fontSize: 12,
        color: '#666666',
    },
});

export default SocialPost; 