import React, {FC} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONT_FAMILY} from '~assets';
import {CloseIcon} from '~components/icons';
import {ButtonUI, Header, Input, ModalUi} from '~components/ui';
import {deleteComment, updateComment} from '~store/features/comments';
import {useAppDispatch, useAppSelector} from '~store/hooks';
import {FetchStatus, IComment} from '~types';

interface ModalCommentSettingsProps {
  comment?: IComment;
  visible: boolean;
  onClose: () => void;
}

interface ModalCommentSettingsValues {
  body: string;
}

export const ModalCommentSettings: FC<ModalCommentSettingsProps> = ({
  comment,
  visible,
  onClose,
}) => {
  const updateCommentFetchStatus = useAppSelector(
    state => state.commentsData.updateCommentFetchStatus,
  );
  const deleteCommentFetchStatus = useAppSelector(
    state => state.commentsData.deleteCommentFetchStatus,
  );
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      body: '',
    },
  });

  const handleUpdateComment = ({body}: ModalCommentSettingsValues) => {
    const id = comment?.id;

    dispatch(updateComment({id, body}));
    onClose();
  };

  const handleDeleteComment = () => {
    const id = comment?.id;

    dispatch(deleteComment(id));
    onClose();
  };

  const isLoadingUpdate = updateCommentFetchStatus === FetchStatus.PENDING;
  const isLoadingDelete = deleteCommentFetchStatus === FetchStatus.PENDING;

  return (
    <ModalUi visible={visible} onClose={onClose}>
      <Header
        title="Settings"
        isDividerActive
        buttonRight={<CloseIcon fill={COLORS.lightBlue} />}
        onPressButtonRight={onClose}
      />

      <View style={styles.container}>
        <Text style={styles.title} numberOfLines={2}>
          Username
        </Text>

        <Text style={styles.username}>
          DDDDDDSDSDSSDDSSDSDusernameadadadadadDDDDDD
        </Text>

        <Text style={styles.title}>Body</Text>

        <View style={styles.inputItem}>
          <Controller
            control={control}
            rules={{
              required: false,
            }}
            render={({field: {onChange, onBlur}}) => (
              <Input
                onChangeText={onChange}
                onBlur={onBlur}
                defaultValue={comment?.body}
                placeholder="Body"
              />
            )}
            name="body"
          />

          {errors.body && (
            <Text style={styles.errorText}>This field is required.</Text>
          )}
        </View>

        <View style={styles.buttonUpdate}>
          <ButtonUI
            title="Update comment"
            isLoading={isLoadingUpdate}
            onPress={handleSubmit(handleUpdateComment)}
          />
        </View>

        <ButtonUI
          title="Delete comment"
          isRed
          onPress={handleDeleteComment}
          isLoading={isLoadingDelete}
        />
      </View>
    </ModalUi>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    fontFamily: FONT_FAMILY.primary,
  },

  title: {
    fontSize: 17,
    paddingRight: 15,
    marginBottom: 5,
  },

  username: {
    fontSize: 17,
    lineHeight: 20,
    color: COLORS.primary,
    paddingBottom: 5,
  },

  inputItem: {
    width: '100%',
    paddingBottom: 20,
  },

  errorText: {color: COLORS.red},

  buttonUpdate: {
    marginBottom: 10,
  },
});
