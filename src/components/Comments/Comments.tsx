import React, {FC} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {COLORS, FONT_FAMILY} from '~assets';
import {MessageIcon} from '~components/icons';
import {InputWithoutBorder} from '~components/ui';
import {addComment} from '~store/features/comments';
import {useAppDispatch, useAppSelector} from '~store/hooks';
import {FetchStatus, IComment} from '~types';
import {CommentItem} from './CommentItem';

interface CommentsProps {
  filtredComments: IComment[];
  prayerId?: number;
}

interface CommentsValues {
  body: string;
}
export const Comments: FC<CommentsProps> = ({filtredComments, prayerId}) => {
  const addCommentFetchStatus = useAppSelector(
    state => state.commentsData.addCommentsFetchStatus,
  );
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    defaultValues: {
      body: '',
    },
  });

  const isLoadingAddComment = addCommentFetchStatus === FetchStatus.PENDING;

  const addNewComment = ({body}: CommentsValues) => {
    const id = prayerId;

    dispatch(addComment({body, id}));
    reset();
  };
  return (
    <View style={styles.comments}>
      <Text style={styles.commentsTitle}>Comments</Text>
      {filtredComments.length ? (
        <View style={styles.commentsContainer}>
          {filtredComments.map(comment => {
            return <CommentItem key={comment.id} comment={comment} />;
          })}
        </View>
      ) : (
        <Text style={styles.emptyComments}>NO COMMENTS</Text>
      )}

      <View style={styles.addCommentContainer}>
        <View style={styles.addCommentIcon}>
          {isLoadingAddComment ? (
            <ActivityIndicator size="small" color={COLORS.primary} />
          ) : (
            <MessageIcon />
          )}
        </View>

        <View style={styles.addCommentInput}>
          <Controller
            control={control}
            rules={{
              required: false,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <InputWithoutBorder
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Add a comment..."
                returnKeyType="done"
                onSubmitEditing={handleSubmit(addNewComment)}
              />
            )}
            name="body"
          />

          {errors.body && (
            <Text style={styles.errorText}>This field is required.</Text>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  comments: {},

  commentsTitle: {
    fontFamily: FONT_FAMILY.primary,
    fontSize: 13,
    lineHeight: 15,
    color: COLORS.lightBlue,
    textTransform: 'uppercase',
    paddingBottom: 15,
    paddingLeft: 15,
  },

  commentsContainer: {
    paddingBottom: 15,
  },

  emptyComments: {
    alignSelf: 'center',
  },

  addCommentContainer: {
    paddingHorizontal: 15,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  addCommentIcon: {
    marginRight: 12,
  },

  addCommentInput: {
    width: '100%',
  },

  errorText: {color: COLORS.red},
});
