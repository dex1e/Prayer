import React, {FC} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '~assets';
import {MessageIcon} from '~components/icons';
import {InputWithoutBorder} from '~components/ui';
import {addComment} from '~store/features/comments';
import {useAppDispatch, useAppSelector} from '~store/hooks';
import {FetchStatus} from '~types';

interface AddCommentItemProps {
  prayerId?: number;
}

interface AddCommentItemValues {
  body: string;
}

export const AddCommentItem: FC<AddCommentItemProps> = ({prayerId}) => {
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

  const addNewComment = ({body}: AddCommentItemValues) => {
    dispatch(addComment({body, id: prayerId}));
    reset();
  };

  return (
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
  );
};

const styles = StyleSheet.create({
  addCommentContainer: {
    paddingHorizontal: 15,
    paddingBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },

  addCommentIcon: {
    marginRight: 12,
  },

  addCommentInput: {
    width: '100%',
    paddingRight: 15,
    overflow: 'hidden',
  },

  errorText: {color: COLORS.red},
});
