import { TaskComponent } from './task.component'
import { Meta, Story } from '@storybook/angular'
import { action } from '@storybook/addon-actions';

export default {
  component: TaskComponent,
  title: 'Task',
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  parameters: {

  },
} as Meta

export const actionData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
}

const Template: Story = args => ({
  props: {
    ...args,
    onPinTask: actionData.onPinTask,
    onArchiveTask: actionData.onArchiveTask,
  },
})

export const Default = Template.bind({})
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
  },
}

export const Pinned = Template.bind({})
Pinned.args = {
  task: {
    ...Default.args['task'],
    state: 'TASK PINNED',
  },
}

export const Archived = Template.bind({})
Archived.args = {
  task: {
    ...Default.args['task'],
    state: 'TASK_ARCHIVED',
  },
}
