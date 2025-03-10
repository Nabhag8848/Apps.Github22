export enum ModalsEnum {
    ADD_GITHUB_ISSUE_ASSIGNEE_PROFILE = 'add-github-issue-assignee-profile',
    SHARE_ISSUE_ACTION = 'share-issue-action',
    TRIGGER_ISSUE_DISPLAY_MODAL = 'display-issue',
    SWITCH_ISSUE_ORDER = 'switch-issue-order',
    ISSUES_ASCENDING = 'asc',
    ISSUES_DESCENDING = 'desc',
    SWITCH_ISSUE_STATE = 'switch-issue-state',
    SWITCH_ISSUE_SORT = 'switch-issue-sort',
    ISSUE_SORT_CREATED = 'sort_created',
    ISSUE_SORT_UPDATED = 'sort_updated',
    ISSUE_SORT_COMMENTS = 'sort_comments',
    ISSUE_STATE_OPEN = 'open',
    ISSUE_STATE_CLOSED = 'closed',
    ASSIGNED_ISSUE_FILTER = 'assigned',
    CREATED_ISSUE_FILTER = 'created',
    MENTIONED_ISSUE_FILTER = 'mentioned',
    SWITCH_ISSUE_FILTER = 'switch-issue-filter',
    USER_ISSUE_VIEW = 'user-issue-view',
    TRIGGER_ISSUES_MODAL = 'trigger-issue-modal',
    TRIGGER_REPOS_MODAL = 'trigger-repos-modal',
    TRIGGER_ACTIVITY_MODAL = 'trigger-activity-modal',
    TRIGGER_NOTIFICATIONS_MODAL = 'trigger-notifications-modal',
    SHARE_PROFILE_EXEC = 'share-profile-exec',
    SHARE_PROFILE_PARAMS = 'share-profile-params',
    SHARE_PROFILE = 'share-profile',
    PULL_VIEW = 'pull-view',
    CODE_VIEW = 'code-view',
    CODE_VIEW_LABEL = 'Code Changes',
    CODE_INPUT='code-input',
    VIEW_FILE_ACTION = 'view-file-task',
    VIEW_FILE_ACTION_LABEL = 'View File',
    VIEW_DIFFS_ACTION_LABEL = 'View Changes',
    PULL_VIEW_LABEL = 'Pull Request',
    MERGE_PULL_REQUEST_ACTION = 'merge-pull-request',
    MERGE_PULL_REQUEST_LABEL = 'Merge',
    COMMENT_PR_ACTION = 'comment-pull-request',
    COMMENT_PR_LABEL = 'Add Comment',
    COMMENT_ISSUE_ACTION = 'comment-issue',
    COMMENT_ISSUE_LABEL = 'Add Comment',
    SUBSCRIPTION_TITLE='GitHub Subscriptions',
    SUBSCRIPTION_VIEW = 'subscriptions-view',
    ADD_SUBSCRIPTION_VIEW = 'add-subscription-view',
    DELETE_SUBSCRIPTION_VIEW ='delete-subscription-view',
    USER_PROFILE_VIEW = 'user-profile-view',
    OPEN_ADD_SUBSCRIPTIONS_MODAL='open-add-subscriptions',
    OPEN_UPDATE_SUBSCRIPTIONS_MODAL='open-update-subscriptions',
    OPEN_DELETE_SUBSCRIPTIONS_MODAL='open-update-subscriptions',
    OPEN_ADD_SUBSCRIPTIONS_LABEL='Add Subscriptions',
    OPEN_UPDATE_SUBSCRIPTIONS_LABEL='Update Subscriptions',
    OPEN_DELETE_SUBSCRIPTIONS_LABEL='Delete Subscriptions',
    DELETE_SUBSCRIPTION_ACTION='delete-subscription',
    DELETE_SUBSCRIPTION_LABEL='Unsubscribe',
    ADD_SUBSCRIPTION_ACTION='add-subscription',
    ADD_SUBSCRIPTION_LABEL='Subscribe',
    UPDATE_SUBSCRIPTION_ACTION='update-subscription',
    UPDATE_SUBSCRIPTION_LABEL='Update',
    DELETE_SUBSCIPTIONS_TITLE='Unsubscribe to Repositories',
    ADD_SUBSCIPTIONS_TITLE='New Subscription',
    OPEN_REPO_ACTION='open-repo',
    OPEN_REPO_LABEL='Open',
    REPO_NAME_INPUT='repo-name-input',
    REPO_NAME_LABEL='Enter Full Repository Name',
    REPO_NAME_PLACEHOLDER='Owner/Repository',
    REPO_NAME_INPUT_ACTION='repo-name-input-action',
    ADD_SUBSCRIPTION_EVENT_LABEL='Add Events',
    ADD_SUBSCRIPTION_EVENT_OPTIONS='add-repo-subscription-events',
    ADD_SUBSCRIPTION_EVENT_INPUT='add-repo-subscription-events',
    SUBSCRIPTION_REFRESH_LABEL="Refresh",
    SUBSCRIPTION_REFRESH_ACTION="subscription-refresh",
    MERGE_PULL_REQUEST_VIEW="merge-pull-request-view",
    MERGE_PULL_REQUEST_VIEW_TITLE="Merge Pull Request",
    PULL_REQUEST_NUMBER_INPUT="pull-request-number-input",
    PULL_REQUEST_NUMBER_LABEL="Pull Request Number",
    PULL_REQUEST_NUMBER_INPUT_ACTION="pull-request-number-input-action",
    PULL_REQUEST_NUMBER_INPUT_PLACEHOLDER="22",
    PULL_REQUEST_COMMIT_TITLE_INPUT="pull-request-commit-title-input",
    PULL_REQUEST_COMMIT_TITLE_LABEL="Merge Commit Title",
    PULL_REQUEST_COMMIT_TITLE_ACTION="pull-request-commit-title-action",
    PULL_REQUEST_COMMIT_TITLE_PLACEHOLDER="Add New PR Review Component",
    PULL_REQUEST_COMMIT_MESSAGE_INPUT="pull-request-commit-message-input",
    PULL_REQUEST_COMMIT_MESSAGE_LABEL="Merge Commit Message",
    PULL_REQUEST_COMMIT_MESSAGE_ACTION="pull-request-commit-message-action",
    PULL_REQUEST_COMMIT_MESSAGE_PLACEHOLDER="The New Pull Request Component Adds...",
    PULL_REQUEST_MERGE_METHOD_OPTION="pull-request-merge-method-option",
    PULL_REQUEST_MERGE_METHOD_INPUT_LABEL="Merge Method",
    PULL_REQUEST_MERGE_METHOD_INPUT="pull-request-merge-method-input",
    MESSAGE_MODAL_VIEW="message-modal-view",
    ADD_PULL_REQUEST_COMMENT_VIEW_TITLE="GitHub Comments",
    ADD_PULL_REQUEST_COMMENT_VIEW="add-pull-request-comment-view",
    PULL_REQUEST_COMMENT_INPUT="pull-request-comment-input",
    PULL_REQUEST_COMMENT_INPUT_LABEL="Enter Comment",
    PULL_REQUEST_COMMENT_INPUT_PLACEHOLDER="@RonLek can you please reveiw the PR ?",
    PULL_REQUEST_COMMENT_INPUT_ACTION="add-pull-request-comment-input-actions",
    PULL_REQUEST_COMMENT_VIEW_TITLE="GitHub Comments",
    PULL_REQUEST_COMMENTS_MODAL_VIEW="pull-request-commments-list-view",
    PR_COMMENT_LIST_ACTION="pull-request-comment-list-action",
    PR_COMMENT_LIST_LABEL="Comments",
    ISSUE_NUMBER_LABEL="Issue Number",
    ISSUE_COMMENT_LIST_ACTION="issues-comment-list-action",
    ISSUE_COMMENT_LIST_LABEL="Comments",
    ISSUE_COMMENTS_MODAL_VIEW="issue-commments-list-view",
    ADD_ISSUE_COMMENT_VIEW="add-issue-comment-view",
    ISSUE_COMMENT_INPUT="issue-comment-input",
    ISSUE_COMMENT_INPUT_LABEL="Enter Comment",
    ISSUE_COMMENT_INPUT_PLACEHOLDER="@RonLek can you please assign this issue to me ?",
    ISSUE_COMMENT_INPUT_ACTION="add-issue-comment-input-actions",
    ISSUE_COMMENT_VIEW_TITLE="GitHub Comments",
    ADD_ISSUE_COMMENT_VIEW_TITLE="GitHub Comments",
    VIEW_USER_ACTION="view-user-action",
    VIEW_USER_LABEL="User Profile",
    SEARCH_VIEW="search-view",
    SEARCH_VIEW_TITLE="GitHub Search",
    GITHUB_SEARCH_ACTION = "github-search-action",
    ADD_MAIN_SEARCH_PARAMATER_INPUT_LABEL="Resource",
    ADD_MAIN_SEARCH_PARAMATER_OPTION ="add-main-search-paramater-option",
    ADD_MAIN_SEARCH_PARAMATER_INPUT="add-main-search-paramater-input",
    AUTHOR_NAMES_INPUT="author-names-input",
    AUTHOR_NAMES_INPUT_LABEL="Author/'s",
    AUTHOR_NAMES_INPUT_ACTION="author-names-input-action",
    AUTHOR_NAMES_INPUT_PLACEHOLDERS="samad-yar-khan RonLek Sing-Li",
    RESOURCE_LABELS_INPUT="resource-labels-input",
    RESOURCE_LABELS_INPUT_LABEL="Label/'s",
    RESOURCE_LABELS_INPUT_ACTION="resource-labels-input-action",
    RESOURCE_LABELS_INPUT_PLACEHOLDER="enhancement bug ui/ux",
    RESOURCE_MILESTONES_INPUT="resource-milestone-input",
    RESOURCE_MILESTONES_INPUT_LABEL="Milestone/'s",
    RESOURCE_MILESTONES_INPUT_ACTION="resource-milestone-input",
    RESOURCE_MILESTONES_PLACEHOLDER="Quarter1Milstone Quarter2Milestone",
    ADD_SEARCH_STATE_PARAMATER_INPUT_OPTION="add-search-state-paramater-option",
    ADD_SEARCH_STATE_PARAMATER_INPUT_LABEL="State",
    ADD_SEARCH_STATE_PARAMATER_INPUT="add-search-state-paramater-input",
    SEARCH_RESULT_VIEW ="search-result-view",
    SHARE_SEARCH_RESULT_ACTION="share-search-result-action",
    SHARE_SEARCH_RESULT_LABEL="Share",
    OPEN_GITHUB_RESULT_ACTION="open-github-result-action",
    OPEN_GITHUB_RESULT_LABEL="GitHub",
    MULTI_SHARE_ADD_SEARCH_RESULT_ACTION="github-multishare-search-add-result-action",
    MULTI_SHARE_ADD_SEARCH_RESULT_LABEL="Add",
    MULTI_SHARE_REMOVE_SEARCH_RESULT_ACTION="github-multishare-search-remove-result-action",
    MULTI_SHARE_REMOVE_SEARCH_RESULT_LABEL="Remove",
    VIEW_GITHUB_SEARCH_RESULT_PR_CHANGES='view-github-search-result-pr-changes',
    VIEW_GITHUB_SEARCH_RESULT_PR_CHANGES_LABEL="View Changes",
    GITHUB_SEARCH_ERROR_VIEW="github-search-error-view",
    SEARCH_RESULT_SHARE_VIEW_TITLE="GitHub Search",
    SEARCH_RESULT_SHARE_VIEW="github-search-result-share",
    MULTI_SHARE_SEARCH_INPUT="multishare-github-search-input",
    MULTI_SHARE_SEARCH_INPUT_LABEL="Search Results",
    MULTI_SHARE_SEARCH_INPUT_ACTION="multishare-github-search-input-action",
    NEW_ISSUE_VIEW="new-issue-view",
    NEW_ISSUE_TITLE = 'New GitHub Issue',
    NEW_ISSUE_ACTION = "new-issue-action",
    ISSUE_TITLE_INPUT = "new-issue-title-input",
    ISSUE_TITLE_LABEL = "New Issue Title",
    ISSUE_TITLE_ACTION = "new-issue-title-action",
    ISSUE_TITLE_PLACEHOLDER = "[Bug/Feature] Issue Title",
    ISSUE_BODY_INPUT = "issue-body-input",
    ISSUE_BODY_INPUT_LABEL = "New Issue Text",
    ISSUE_BODY_INPUT_ACTION = "new-issue-body-action",
    ISSUE_BODY_INPUT_PLACEHOLDER = "Leave a comment",
    ISSUE_LABELS_INPUT = "issue-labels-input",
    ISSUE_LABELS_INPUT_LABEL = "Add Issue Labels",
    ISSUE_LABELS_INPUT_ACTION = "issue-labels-input-action",
    ISSUE_LABELS_INPUT_PLACEHOLDER = "ui/ux bug feature-request",
    ISSUE_ASSIGNEES_INPUT = "issue-assignees-input",
    ISSUE_ASSIGNEES_INPUT_LABEL = "Add Assignees",
    ISSUE_ASSIGNEES_INPUT_ACTION = "issue-assignee-input-action",
    ISSUE_ASSIGNEES_INPUT_PLACEHOLDER = "samad-yar-khan RonLek Sing-Li",
    NEW_ISSUE_STARTER_VIEW = "new-issue-starter-view",
    NEW_ISSUE_STARTER__ACTION= "new-issue-starter-action",
    ISSUE_TEMPLATE_SELECTION_VIEW= "issue-template-selection-view",
    ISSUE_TEMPLATE_SELECTION_ACTION = "issue-template-selection-action",
    ISSUE_TEMPLATE_SELECTION_LABEL = "Select",
    BLANK_GITHUB_TEMPLATE = "blank-github-app-template",
    GITHUB_ISSUES_STARTER_VIEW = "github-issues-starter-view",
    GITHUB_ISSUES_TITLE = "GitHub Issues",
    ISSUE_LIST_VIEW = "github-issue-list-view",
    ADD_GITHUB_ISSUE_ASSIGNEE = "update-github-issue",
    ADD_GITHUB_ISSUE_ASSIGNEE_LABEL = "Assign",
    ADD_ISSUE_ASSIGNEE_VIEW = "add-issue-assignee-view",
    ISSUE_ASSIGNEE_INPUT = "issue-assignee-input",
    ISSUE_ASSIGNEE_LABEL = "Assignees",
    ISSUE_ASSIGNEE_INPUT_ACTION = "issue-assignee-input-action",
    ISSUE_ASSIGNEE_PLACEHOLDER = "samad-yar-khan RonLek",
    ISSUE_NUMBER_INPUT = "issue-number-input",
    ISSUE_NUMBER_INPUT_LABEL = "Issue Number",
    ISSUE_NUMBER_INPUT_ACTION = "issue-number-input-action",
    ISSUE_NUMBER_INPUT_PLACEHOLDER = "23",
    REFRESH_GITHUB_ISSUES_ACTION = "refresh-github-issues-action",
    REFRESH_GITHUB_ISSUES_LABEL = "Refresh",
    MULTI_SHARE_REMOVE_GITHUB_ISSUE_ACTION = "github-multishare-issue-remove-action",
    MULTI_SHARE_REMOVE_GITHUB_ISSUE_LABEL = "Remove",
    MULTI_SHARE_ADD_GITHUB_ISSUE_ACTION = "github-multishare-issue-add-action",
    MULTI_SHARE_ADD_GITHUB_ISSUE_LABEL = "Add",
    GITHUB_ISSUES_SHARE_VIEW = "github-issues-share-view",
    MULTI_SHARE_GITHUB_ISSUES_INPUT = "multishare-github-issues-input",
    MULTI_SHARE_GITHUB_ISSUES_INPUT_LABEL = "Issues",
    MULTI_SHARE_GITHUB_ISSUES_INPUT_ACTION = "multishare-github-issues-input-action",
    GITHUB_LOGIN_ACTION = "github-login-action",
    MAIN_MODAL_VIEW = "main-modal-view",
    MAIN_MODAL_OPEN_LABLE = "Open",
    MAIN_MODAL_TITLE = "GitHub",
    TRIGGER_SEARCH_MODAL = "trigger-search-modal",
    TRIGGER_NEW_ISSUE_MODAL = "trigger-new-issue-modal",
    TRIGGER_SUBSCRIPTIONS_MODAL = "trigger-subscriptions-modal",
    TRIGGER_ASSIGN_ISSUES_MODAL = "trigger-assign-issues-modal",
    MAIN_MODAL_GITHUB_SEARCH_LABLE = "Github Search",
    MAIN_MODAL_GITHUB_SEARCH_DESCRIPTION = "Search Github and share your resources on the channel",
    MAIN_MODAL_NEW_ISSUE_LABLE = "New Issues",
    MAIN_MODAL_NEW_ISSUE_DESCRIPTION = "Create new issues on Github",
    MAIN_MODAL_REPOSITORY_SUBSCRIPTIONS_LABLE = "Repository Subscriptions",
    MAIN_MODAL_REPOSITORY_SUBSCRIPTIONS_DESCRIPTION = "Subscribe to repositories Events",
    MAIN_MODAL_ASSIGN_ISSUES_LABLE = "Assign Issues",
    MAIN_MODAL_ASSIGN_ISSUES_DESCRIPTION = "Assign issues to your team members",
}
